export default function DoctorCardSkeleton() {
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm animate-pulse">
            {/* Image Section Skeleton */}
            <div className="relative aspect-[4/3] w-full bg-slate-200" />

            {/* Content Section Skeleton */}
            <div className="flex flex-1 flex-col p-5 space-y-4">
                {/* Designation */}
                <div className="h-3 w-1/3 bg-slate-200 rounded" />

                {/* Name */}
                <div className="h-6 w-3/4 bg-slate-200 rounded" />

                {/* Hospital */}
                <div className="h-4 w-1/2 bg-slate-200 rounded" />

                {/* Fees Section */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col w-full space-y-2">
                        <div className="h-3 w-1/4 bg-slate-200 rounded" />
                        <div className="h-4 w-1/2 bg-slate-200 rounded" />
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="h-10 rounded-xl bg-slate-200" />
                    <div className="h-10 rounded-xl bg-slate-200" />
                </div>
            </div>
        </div>
    );
}
