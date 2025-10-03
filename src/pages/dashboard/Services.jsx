import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Edit,
  Trash2,
  Eye,
  Clock,
  Users,
  IndianRupee
} from "lucide-react";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const Services = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Modal states
  const [viewModal, setViewModal] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [editData, setEditData] = useState({ name: "", price: "", category: "", description: "" });

  // ✅ Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem("token");
        const vendorId = localStorage.getItem("VendorID");

        if (!vendorId) {
          console.error("Vendor ID not found in localStorage");
          return;
        }

        const res = await axios.get(
          `http://localhost:5000/api/products/vendorProducts/${vendorId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setServices(res.data.products);
      } catch (error) {
        console.error("Error fetching services:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // ✅ Search filter
  const filteredServices = services?.filter(service =>
    service?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service?.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Status Badge
  const getStatusBadge = (status) => {
    const statusStyles = {
      active: "bg-green-100 text-green-800",
      inactive: "bg-red-100 text-red-800",
      draft: "bg-yellow-100 text-yellow-800"
    };

    return (
      <Badge className={statusStyles[status] || "bg-gray-100 text-gray-800"}>
        {status ? status.charAt(0).toUpperCase() + status.slice(1) : "Unknown"}
      </Badge>
    );
  };

  // ✅ Handle Edit
  const handleEdit = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:5000/api/products/updateProduct/${editModal._id}`,
        editData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditModal(null);
      window.location.reload(); // Refresh list
    } catch (error) {
      console.error("Error updating service:", error.response?.data || error.message);
    }
  };

  // ✅ Handle Delete
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `http://localhost:5000/api/products/deleteProduct/${deleteModal._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setDeleteModal(null);
      setServices(prev => prev.filter(s => s._id !== deleteModal._id));
    } catch (error) {
      console.error("Error deleting service:", error.response?.data || error.message);
    }
  };

  if (loading) {
    return <p className="p-6">Loading services...</p>;
  }

  return (
    <div className="p-6 space-y-6 animate-fade-in lg:my-0 my-12 max-h-[100vh] overflow-y-scroll">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Services</h1>
          <p className="text-muted-foreground">
            Manage your service offerings and pricing
          </p>
        </div>
      </div>

      {/* Search */}
      <Card className="shadow-soft">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      
      {filteredServices?.length === undefined ? (
        <div className="shadow-soft">
          <CardContent className="pt-6 text-center">
            <div className="py-12">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No services found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or create a new service.
              </p>
              <Link to="/dashboard/create-service">
                <Button>Create Your First Service</Button>
              </Link>
            </div>
          </CardContent>
        </div>
      ) : (
        <div className="grid gap-6">

          {filteredServices?.map((service) => (
            <Card key={service?._id} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{service?.name}</CardTitle>
                    <CardDescription className="mt-2">{service?.description}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(service?.isActive ? "active" : "inactive")}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">Service ID: {service?.productId}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IndianRupee className="w-4 h-4 text-accent" />
                    <span className="font-semibold">
                      {Number(service?.price).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">
                      Date: {new Date(service.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <Badge variant="outline">Category: {service.category}</Badge>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 mt-4">
                  <Button variant="outline" size="sm" onClick={() => setViewModal(service)}>
                    <Eye className="w-4 h-4 mr-1" /> View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditModal(service);
                      setEditData({
                        name: service.name,
                        price: service.price,
                        category: service.category,
                        description: service.description,
                      });
                    }}
                  >
                    <Edit className="w-4 h-4 mr-1" /> Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => setDeleteModal(service)}
                  >
                    <Trash2 className="w-4 h-4 mr-1" /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}





      {/* View Modal */}
      {viewModal && (
        <Dialog open={true} onOpenChange={() => setViewModal(null)}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{viewModal.name} - Images</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              {viewModal.images?.map((img, idx) => (
                <img key={idx} src={img} alt="service" className="rounded-lg object-cover w-full h-40" />
              ))}
            </div>
            <DialogFooter>
              <Button onClick={() => setViewModal(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Edit Modal */}
      {editModal && (
        <Dialog open={true} onOpenChange={() => setEditModal(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Edit {editModal.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <Input
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                placeholder="Service Name"
              />
              <Input
                type="number"
                value={editData.price}
                onChange={(e) => setEditData({ ...editData, price: e.target.value })}
                placeholder="Price"
              />
              <Input
                value={editData.category}
                onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                placeholder="Category"
              />
              <Input
                value={editData.description}
                onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                placeholder="Description"
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setEditModal(null)}>Cancel</Button>
              <Button onClick={handleEdit}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Modal */}
      {deleteModal && (
        <Dialog open={true} onOpenChange={() => setDeleteModal(null)}>
          <DialogContent className="max-w-sm text-center">
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">
              This action cannot be undone. Do you really want to delete <b>{deleteModal.name}</b>?
            </p>
            <DialogFooter className="flex justify-center gap-4 mt-4">
              <Button variant="outline" onClick={() => setDeleteModal(null)}>Cancel</Button>
              <Button className="bg-red-600 text-white" onClick={handleDelete}>Yes, Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Services;
