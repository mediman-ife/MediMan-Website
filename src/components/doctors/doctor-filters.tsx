'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

export function DoctorFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [specialty, setSpecialty] = useState(searchParams.get('specialty') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');

  const updateFilters = (newFilters: { query: string; specialty: string; location: string }) => {
    const params = new URLSearchParams();
    if (newFilters.query) params.set('query', newFilters.query);
    if (newFilters.specialty && newFilters.specialty !== 'all')
      params.set('specialty', newFilters.specialty);
    if (newFilters.location && newFilters.location !== 'all')
      params.set('location', newFilters.location);

    router.push(`/doctors?${params.toString()}`);
  };

  // Simple debounce logic for query
  useEffect(() => {
    const timer = setTimeout(() => {
      updateFilters({ query, specialty, location });
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // Update immediately for selects
  const handleSpecialtyChange = (val: string) => {
    setSpecialty(val);
    updateFilters({ query, specialty: val, location });
  };

  const handleLocationChange = (val: string) => {
    setLocation(val);
    updateFilters({ query, specialty, location: val });
  };

  return (
    <div className="bg-card p-4 rounded-lg border shadow-sm space-y-4">
      <div>
        <h2 className="font-semibold mb-2">Search</h2>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search doctors..."
            className="pl-8"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Specialty</h2>
        <Select value={specialty} onValueChange={handleSpecialtyChange}>
          <SelectTrigger>
            <SelectValue placeholder="All Specialties" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Specialties</SelectItem>
            <SelectItem value="Cardiologist">Cardiologist</SelectItem>
            <SelectItem value="Dentist">Dentist</SelectItem>
            <SelectItem value="Dermatologist">Dermatologist</SelectItem>
            <SelectItem value="Gynecologist">Gynecologist</SelectItem>
            <SelectItem value="Neurologist">Neurologist</SelectItem>
            <SelectItem value="Pediatrician">Pediatrician</SelectItem>
            <SelectItem value="General Practitioner">General Practitioner</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Location</h2>
        <Select value={location} onValueChange={handleLocationChange}>
          <SelectTrigger>
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="Colombo">Colombo</SelectItem>
            <SelectItem value="Jaffna">Jaffna</SelectItem>
            <SelectItem value="Kandy">Kandy</SelectItem>
            <SelectItem value="Batticaloa">Batticaloa</SelectItem>
            <SelectItem value="Galle">Galle</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setQuery('');
          setSpecialty('');
          setLocation('');
          router.push('/doctors');
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
}
