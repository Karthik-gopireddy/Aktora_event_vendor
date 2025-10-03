import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Save, Plus } from "lucide-react";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    email: "",
    phone: "",
    price: "",
    address: "",
    features: [""],
    vendorId: "", // you can set this dynamically
  });

  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFeatureChange = (index, value) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.map((f, i) => (i === index ? value : f)),
    }));
  };

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }));
  };

  const removeFeature = (index) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  const handleFileChange = (e, type) => {
    if (type === "images") {
      setImages(Array.from(e.target.files));
    } else {
      setVideos(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {

      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (Array.isArray(formData[key])) {
          formData[key].forEach((item) => data.append(key, item));
        } else {
          data.append(key, formData[key]);
        }
      });

      images.forEach((img) => data.append("images", img));
      videos.forEach((vid) => data.append("videos", vid));

      const token = localStorage.getItem("token"); // or wherever you store the JWT

      const res = await axios.post(
        "http://localhost:5000/api/products/createProduct",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // 👈 send token here
          },
        }
      );

      toast({
        title: "Product Created!",
        description: `Product ${res.data.productId} created successfully.`,
      });

      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to create product.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChanges = (e, type) => {
    const files = Array.from(e.target.files);

    if (type === "images") {
      setImages(files.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })));
    } else {
      setVideos(files.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })));
    }
  };



  return (
    <div className="p-6 space-y-6 max-h-[100vh] overflow-y-scroll">
      <Card>
        <CardHeader>
          <CardTitle>Create New Product</CardTitle>
          <CardDescription>Add product details</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Product Name</Label>
              <Input name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label>Category</Label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">-- Select Category --</option>
                <option value="Venues">Venues (Banquet Halls, Mini Birthday Theaters, Farmhouses)</option>
                <option value="Photographers & Videographers">Photographers & Videographers</option>
                <option value="Event Planners">Event Planners</option>
                <option value="Decor & Styling">Decor & Styling</option>
                <option value="Catering Services">Catering Services</option>
                <option value="Event Material Rentals">Event Material Rentals</option>
                <option value="Entertainment Services">Entertainment Services (DJ, Music, etc.)</option>
                <option value="Makeup & Styling">Makeup & Styling</option>
                <option value="Wedding Car Rentals">Wedding Car Rentals</option>
                <option value="Pubs, Bars & Restaurants">Pubs, Bars & Restaurants</option>
                <option value="Cafes">Cafes</option>
                <option value="Children Play Zones">Children Play Zones</option>
                <option value="Activity Spaces">Activity Spaces for Birthday Celebrations</option>
              </select>
            </div>


            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea name="description" value={formData.description} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label>Phone</Label>
              <Input name="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label>Price</Label>
              <Input type="number" name="price" value={formData.price} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label>Address</Label>
              <Input name="address" value={formData.address} onChange={handleChange} required />
            </div>

            {/* Features */}
            <div className="space-y-2">
              <Label>Features</Label>
              {formData.features.map((f, i) => (
                <div key={i} className="flex space-x-2">
                  <Input value={f} onChange={(e) => handleFeatureChange(i, e.target.value)} />
                  {formData.features.length > 1 && (
                    <Button type="button" variant="outline" onClick={() => removeFeature(i)}>
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" onClick={addFeature}>
                <Plus className="w-4 h-4 mr-1" /> Add Feature
              </Button>
            </div>

            {/* File Uploads */}
            {/* File Uploads */}
            <div className="space-y-2">
              <Label>Upload Images</Label>
              <Input type="file" multiple accept="image/*" onChange={(e) => handleFileChanges(e, "images")} />

              {/* Image Previews */}
              {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                  {images.map((img, index) => (
                    <div key={index} className="relative w-full h-32">
                      <img
                        src={img.preview}
                        alt={`preview-${index}`}
                        className="w-full h-full object-cover rounded-lg border"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>


            <div className="space-y-2">
              <Label>Upload Videos</Label>
              <Input type="file" multiple accept="video/*" onChange={(e) => handleFileChange(e, "videos")} />
            </div>

            <Button type="submit" disabled={isLoading} className="bg-gradient-accent">
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? "Creating..." : "Create Product"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProduct;