import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Hammer, Home, Users, Star, Phone, Mail, MapPin } from "lucide-react"

export default function ConstructionLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-foreground">BuildCraft Pro</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors scroll-smooth">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors scroll-smooth">
              About
            </a>
            <a
              href="#portfolio"
              className="text-muted-foreground hover:text-foreground transition-colors scroll-smooth"
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
              className="text-muted-foreground hover:text-foreground transition-colors scroll-smooth"
            >
              Testimonials
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors scroll-smooth">
              Contact
            </a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Get Quote</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('/construction-site-with-cranes-and-buildings-under-.png')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              25+ Years of Excellence
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Building Your Vision with Precision
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              From residential homes to commercial complexes, we deliver exceptional construction services with
              unmatched quality and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Free Estimate
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#portfolio" className="scroll-smooth">
                  View Our Work
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet your specific needs and exceed your expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Home className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Residential Construction</CardTitle>
                <CardDescription>
                  Custom homes, renovations, and residential projects built to your exact specifications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Custom Home Building</li>
                  <li>• Kitchen & Bathroom Remodeling</li>
                  <li>• Home Additions</li>
                  <li>• Basement Finishing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Commercial Projects</CardTitle>
                <CardDescription>
                  Office buildings, retail spaces, and commercial facilities designed for success.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Office Buildings</li>
                  <li>• Retail Spaces</li>
                  <li>• Warehouses</li>
                  <li>• Restaurant Build-outs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Hammer className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Renovations</CardTitle>
                <CardDescription>
                  Transform existing spaces with our expert renovation and remodeling services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Interior Renovations</li>
                  <li>• Exterior Upgrades</li>
                  <li>• Historic Restorations</li>
                  <li>• Energy Efficiency Upgrades</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                About BuildCraft Pro
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Building Excellence Since 1998</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 25 years of experience in the construction industry, BuildCraft Pro has established itself as
                a trusted partner for residential and commercial construction projects throughout the region.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Star className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">4.9/5</div>
                    <div className="text-sm text-muted-foreground">Client Rating</div>
                  </div>
                </div>
              </div>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Learn More About Us</Button>
            </div>
            <div className="relative">
              <img
                src="/construction-team-working-on-a-building-project.png"
                alt="Construction team at work"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Recent Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our completed projects that showcase our commitment to quality and craftsmanship.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/modern-residential-home-exterior.png"
                  alt="Modern residential home"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Modern Family Home</CardTitle>
                <CardDescription>
                  A stunning 3,500 sq ft custom home featuring contemporary design and energy-efficient systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Residential</Badge>
                  <span className="text-sm text-muted-foreground">Completed 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/commercial-office-building-exterior.png"
                  alt="Commercial office building"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Downtown Office Complex</CardTitle>
                <CardDescription>
                  A 5-story commercial building with modern amenities and sustainable construction practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Commercial</Badge>
                  <span className="text-sm text-muted-foreground">Completed 2023</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/luxury-kitchen-renovation-interior.png"
                  alt="Kitchen renovation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Luxury Kitchen Renovation</CardTitle>
                <CardDescription>
                  Complete kitchen transformation with custom cabinetry, granite countertops, and premium appliances.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Renovation</Badge>
                  <span className="text-sm text-muted-foreground">Completed 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/retail-store-interior-construction.png"
                  alt="Retail store construction"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Retail Store Build-out</CardTitle>
                <CardDescription>
                  Complete interior construction for a flagship retail location with custom fixtures and lighting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Commercial</Badge>
                  <span className="text-sm text-muted-foreground">Completed 2023</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/historic-building-restoration-exterior.png"
                  alt="Historic building restoration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Historic Building Restoration</CardTitle>
                <CardDescription>
                  Careful restoration of a 1920s building while preserving its architectural heritage and character.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Restoration</Badge>
                  <span className="text-sm text-muted-foreground">Completed 2024</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src="/warehouse-construction-interior.png"
                  alt="Warehouse construction"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Industrial Warehouse</CardTitle>
                <CardDescription>
                  50,000 sq ft warehouse facility with advanced logistics systems and energy-efficient design.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Industrial</Badge>
                  <span className="text-sm text-muted-foreground">Completed 2023</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "BuildCraft Pro exceeded our expectations. The quality of work and attention to detail was
                  outstanding. Our new home is everything we dreamed of and more. The team was professional throughout
                  the entire process."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Sarah Mitchell</div>
                    <div className="text-sm text-muted-foreground">Custom Home Project</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Professional, reliable, and skilled. They completed our office renovation on time and within budget.
                  The communication was excellent and they handled every detail perfectly. Highly recommended!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">DJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">David Johnson</div>
                    <div className="text-sm text-muted-foreground">Office Renovation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The team was fantastic to work with. They kept us informed throughout the process and delivered
                  exceptional results. Our kitchen renovation transformed our entire home experience."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">ER</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Emily Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Kitchen Renovation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "BuildCraft Pro handled our warehouse construction with incredible expertise. The project was complex
                  but they managed every aspect flawlessly. Outstanding craftsmanship and project management."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">MT</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Michael Thompson</div>
                    <div className="text-sm text-muted-foreground">Warehouse Construction</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The historic restoration of our building was handled with such care and attention to detail. They
                  preserved the character while modernizing all the systems. Truly impressive work."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">LC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Lisa Chen</div>
                    <div className="text-sm text-muted-foreground">Historic Restoration</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "From design to completion, BuildCraft Pro made our retail store vision come to life. The attention to
                  detail and quality of work exceeded our expectations. Great team to work with!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">RW</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Robert Wilson</div>
                    <div className="text-sm text-muted-foreground">Retail Build-out</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and estimate. Let's bring your construction vision to
            life.
          </p>
          <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Contact Us Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6" />
                <span className="text-lg font-bold">BuildCraft Pro</span>
              </div>
              <p className="text-sm opacity-80 mb-4">
                Building excellence with precision and reliability for over 25 years.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Residential Construction</li>
                <li>Commercial Projects</li>
                <li>Renovations</li>
                <li>Remodeling</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Portfolio</li>
                <li>Careers</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@buildcraftpro.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Construction Ave, City, ST 12345</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 BuildCraft Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
