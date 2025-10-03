import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Import all service images
import venuesImage from "@/assets/venues.jpg";
import photographyImage from "@/assets/photography.jpg";
import eventPlanningImage from "@/assets/event-planning.jpg";
import decorStylingImage from "@/assets/decor-styling.jpg";
import cateringImage from "@/assets/catering.jpg";
import rentalsImage from "@/assets/rentals.jpg";
import entertainmentImage from "@/assets/entertainment.jpg";
import makeupStylingImage from "@/assets/makeup-styling.jpg";
import weddingCarsImage from "@/assets/wedding-cars.jpg";
import pubsRestaurantsImage from "@/assets/pubs-restaurants.jpg";
import cafesImage from "@/assets/cafes.jpg";
import childrenPlayImage from "@/assets/children-play.jpg";
import activitySpacesImage from "@/assets/activity-spaces.jpg";

const ServicePage = () => {
  const { toast } = useToast();

  const services = [
    {
      id: 1,
      title: "Premium Venues",
      category: "Venues",
      description: "Discover stunning banquet halls, intimate mini birthday theaters, and charming farmhouses perfect for your special celebrations. Each venue features elegant design and premium amenities.",
      image: venuesImage
    },
    {
      id: 2,
      title: "Photography & Videography",
      category: "Capture Memories",
      description: "Professional photographers and videographers who specialize in capturing the magic of your events with cinematic quality and artistic vision.",
      image: photographyImage
    },
    {
      id: 3,
      title: "Event Planning",
      category: "Planning",
      description: "Expert event planners who handle every detail of your celebration, from concept to execution, ensuring a seamless and memorable experience.",
      image: eventPlanningImage
    },
    {
      id: 4,
      title: "Decor & Styling",
      category: "Design",
      description: "Transform your venue with our premium decor and styling services featuring elegant floral arrangements, lighting, and themed decorations.",
      image: decorStylingImage
    },
    {
      id: 5,
      title: "Catering Services",
      category: "Culinary",
      description: "Gourmet catering services offering diverse menus from international cuisines to traditional favorites, all prepared with the finest ingredients.",
      image: cateringImage
    },
    {
      id: 6,
      title: "Event Material Rentals",
      category: "Equipment",
      description: "Comprehensive rental services for furniture, linens, lighting, sound systems, and all essential equipment for your perfect event setup.",
      image: rentalsImage
    },
    {
      id: 7,
      title: "Entertainment Services",
      category: "Entertainment",
      description: "Professional DJs, live music bands, and entertainment specialists to keep your guests dancing and create an unforgettable atmosphere.",
      image: entertainmentImage
    },
    {
      id: 8,
      title: "Makeup & Styling",
      category: "Beauty",
      description: "Professional makeup artists and stylists who create stunning looks for all occasions, ensuring you look and feel your absolute best.",
      image: makeupStylingImage
    },
    {
      id: 9,
      title: "Wedding Car Rentals",
      category: "Transportation",
      description: "Luxury vehicle rentals including vintage classics and modern elegance to make your special day transportation as memorable as the celebration.",
      image: weddingCarsImage
    },
    {
      id: 10,
      title: "Pubs, Bars & Restaurants",
      category: "Dining",
      description: "Sophisticated dining venues and bars perfect for intimate celebrations, corporate events, and social gatherings with premium ambiance.",
      image: pubsRestaurantsImage
    },
    {
      id: 11,
      title: "Cafes",
      category: "Casual Dining",
      description: "Cozy and elegant cafes ideal for small gatherings, birthday parties, and casual celebrations with a warm, inviting atmosphere.",
      image: cafesImage
    },
    {
      id: 12,
      title: "Children Play Zones",
      category: "Kids Events",
      description: "Specially designed play areas and entertainment zones that keep children engaged and entertained throughout your celebration.",
      image: childrenPlayImage
    },
    {
      id: 13,
      title: "Activity Spaces",
      category: "Celebrations",
      description: "Dynamic activity spaces perfect for birthday celebrations and interactive events, equipped with everything needed for memorable experiences.",
      image: activitySpacesImage
    }
  ];

  const handleLearnMore = () => {
    toast({
      title: "Service Inquiry",
      description: `Thank you for your interest in ${serviceTitle}. Our team will contact you soon!`,
    });
  };

  return (
    <div className="min-h-screen bg-black">
    

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold  text-white mb-6">
              Our <span className=" text-[#FFD700]">Services</span>
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we provide everything you need to create the perfect event experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="animate-scale-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <ServiceCard
                  title={service.title}
                  category={service.category}
                  description={service.description}
                  image={service.image}
                  onLearnMore={() => handleLearnMore(service.title)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    
    
    </div>
  );
};

export default ServicePage;