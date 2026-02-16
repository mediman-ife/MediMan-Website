
import useSWR from 'swr';
import { Doctor, FilterConstants, SearchParams } from '../types/doctor';

const API_BASE_URL = 'https://api.mediman.life';
const API_KEY = 'jmziDgOf+BmlBA8CJMkBT1hWAQltr1vh';

const fetcher = async (url: string, options?: RequestInit) => {
    const headers = {
        'Content-Type': 'application/json',
        'key': API_KEY,
        ...options?.headers,
    };

    const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'An error occurred while fetching the data.');
    }

    return response.json();
};

export const useDoctors = (params: SearchParams) => {
    const { pageNumber, limit, searchTerm, filter } = params;

    // Construct a stable key for SWR
    // We explicitly clean the params to avoid sending empty strings or undefined values that might break the API
    const cleanFilter = Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(filter || {}).filter(([, v]) => v !== undefined && v !== null && (Array.isArray(v) ? v.length > 0 : true))
    );

    const body: Record<string, unknown> = {
        pageNumber,
        limit,
    };

    if (searchTerm) {
        body.searchTerm = searchTerm;
    }

    if (Object.keys(cleanFilter).length > 0) {
        body.filter = cleanFilter;
    }

    const endpoint = searchTerm ? '/publicRoutes/searchDoctors' : '/publicRoutes/getAllDoctors';
    const key = [endpoint, JSON.stringify(body)];

    const { data, error, isLoading } = useSWR(key, async ([url, bodyString]) => {
        const res = await fetcher(url, {
            method: 'POST',
            body: bodyString,
        });
        return res;
    });

    return {
        doctors: (data?.data as Doctor[]) || [],
        pagination: data?.pagination,
        isLoading,
        isError: error,
    };
};

export const useFilterConstants = () => {
    const { data, error, isLoading } = useSWR('/publicRoutes/getFilterConstants', (url) => fetcher(url, { method: 'GET' }));
    return {
        filters: (data?.data as FilterConstants) || undefined,
        isLoading,
        isError: error
    };
};

export const useServices = () => {
    const { data, error, isLoading } = useSWR('/publicRoutes/getAllServices', (url) => fetcher(url, { method: 'GET' }));
    // Assuming response structure is similar
    return {
        services: data?.data,
        isLoading,
        isError: error
    }
}

export const useLanguages = () => {
    const { data, error, isLoading } = useSWR('/publicRoutes/getAllLanguages', (url) => fetcher(url, { method: 'GET' }));
    // Assuming response structure
    return {
        languages: data?.data,
        isLoading,
        isError: error
    }
}

export const useClinics = () => {
    const { data, error, isLoading } = useSWR('/publicRoutes/getAllClinics', (url) => fetcher(url, { method: 'GET' }));
    return {
        clinics: data?.data,
        isLoading,
        isError: error
    }
}

export const useDoctorProfile = (id: string) => {
    const { data, error, isLoading } = useSWR(id ? `/publicRoutes/getDoctorProfileInfo/${id}` : null, (url) => fetcher(url, { method: 'GET' }));
    return {
        doctor: (data?.data?.doctor as Doctor) || null,
        isLoading,
        isError: error
    };
};
