import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-24 lg:py-32 xl:py-48 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                    Healthcare. Anytime. Anywhere. 🩺
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The simplest way to see your doctor. Video consultations, e-prescriptions, and family health records in one secure platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/doctors">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                      Find a Doctor <MoveRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="https://play.google.com/store/apps/details?id=com.mediman.life">
                    <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                      Download App
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Hero Image Placeholder */}
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last bg-muted/50 flex items-center justify-center">
                <span className="text-muted-foreground">MediMan Hero Image</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
