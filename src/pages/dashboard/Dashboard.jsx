import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import {
  Package,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  BarChart3
} from 'lucide-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [recentActivities,setRecentActivities]=useState()


  useEffect(() => {
    const VendorName = localStorage.getItem("VendorName");
    setName(VendorName);
  }, [])



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


  const ActiveServices = services?.filter(item => item?.isActive === true);

  const InActiveServices = services?.filter(item => item?.isActive === false);



  console.log(ActiveServices?.length || 0, "ActiveServices")
  const stats = [
    {
      title: 'Total Services',
      value: services?.length || 0,
      icon: Package,

    },
    {
      title: 'Active Services',
      value: ActiveServices?.length || 0,
      icon: Package,

    },
    {
      title: 'InActive Services',
      value: InActiveServices?.length || 0,
      icon: Package,

    },

    // {
    //   title: 'Active Clients',
    //   value: '89',
    //   icon: Users,
    //   change: '+5.2%',
    //   changeType: 'positive'
    // },

  ];






  console.log(services, "services")

  return (
    <div className="p-6 space-y-6 animate-fade-in lg:my-0 my-12 overflow-y-scroll">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {name || 'Vendor'}!
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span>
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2 text-accent" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your latest business activities and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services?.slice(0, 3).map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg border">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm">{activity?.name}</p>
                      <p className="text-xs text-muted-foreground">Category: {activity?.category}</p>
                      <p className="text-xs text-muted-foreground">Created Date: {new Date(activity?.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-accent" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">

              <Link to={"/dashboard/create-service"}>
                <button className="w-full p-3 text-left rounded-lg border hover:bg-muted transition-colors">
                  <div className="font-medium">Create New Service</div>
                  <div className="text-sm text-muted-foreground">Add a new service offering</div>
                </button>
              </Link>

              <button className="w-full p-3 text-left rounded-lg border hover:bg-muted transition-colors">
                <div className="font-medium">View Analytics</div>
                <div className="text-sm text-muted-foreground">Check performance metrics</div>
              </button>

              <button className="w-full p-3 text-left rounded-lg border hover:bg-muted transition-colors">
                <div className="font-medium">Manage Clients</div>
                <div className="text-sm text-muted-foreground">Update client information</div>
              </button>


            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;