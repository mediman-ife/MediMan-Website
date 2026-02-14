import { Doctor } from '@/types/doctor';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Stethoscope, Video } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-muted/40">
      <div className="relative h-72 w-full bg-muted/20">
        {/* In production, use a real image. For now, a placeholder color block or generic icon */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-muted/10">
          {doctor.image && doctor.image.startsWith('http') ? (
            <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
          ) : (
            <div className="bg-primary/5 w-full h-full flex items-center justify-center">
              <span className="text-4xl">👨‍⚕️</span>
            </div>
          )}
        </div>
        {doctor.available && (
          <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
            Available
          </Badge>
        )}
      </div>
      <CardHeader className="p-6 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg line-clamp-1">{doctor.name}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Stethoscope className="w-3 h-3 text-secondary" /> {doctor.specialty}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-xs font-medium text-yellow-700">
            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
            {doctor.rating}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 text-primary" />
          {doctor.location}
        </div>
        <div className="flex gap-2">
          <Badge
            variant="secondary"
            className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 border-none gap-1"
          >
            <Video className="w-3 h-3" /> Video Consult
          </Badge>
          <Badge variant="outline" className="text-xs gap-1">
            In-Clinic
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90">Book Appointment</Button>
      </CardFooter>
    </Card>
  );
}
