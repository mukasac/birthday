// src/components/layout/main-nav.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, Calendar, Gift, Gamepad2, 
  Users, Settings, Menu, X, Bell,
  PieChart, Heart, Cake, Star,
  ChevronDown, LogOut, User
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Home
  },
  {
    title: 'Events',
    href: '/events',
    icon: Calendar,
    subItems: [
      { title: 'Calendar', href: '/events/calendar' },
      { title: 'Create Event', href: '/events/create' },
      { title: 'Event Management', href: '/events/manage' }
    ]
  },
  {
    title: 'Quizzes',
    href: '/quizzes',
    icon: Gamepad2,
    subItems: [
      { title: 'My Quizzes', href: '/quizzes/manage' },
      { title: 'Create Quiz', href: '/quizzes/create' },
      { title: 'Quiz Results', href: '/quizzes/results' }
    ]
  },
  {
    title: 'Gifts',
    href: '/gifts',
    icon: Gift,
    subItems: [
      { title: 'Gift Pools', href: '/gifts/pools' },
      { title: 'Create Pool', href: '/gifts/create' },
      { title: 'Wishlists', href: '/gifts/wishlists' }
    ]
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: PieChart
  }
];

export function MainNav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const NavLink = ({ item, mobile = false }: { 
    item: typeof navigationItems[0], 
    mobile?: boolean 
  }) => {
    const active = isActive(item.href);
    const Icon = item.icon;

    if (item.subItems) {
      return (
        <DropdownMenu
          open={activeDropdown === item.title}
          onOpenChange={(open) => setActiveDropdown(open ? item.title : null)}
        >
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`w-full justify-start ${active ? 'bg-gray-100' : ''}`}
            >
              <Icon className="h-4 w-4 mr-2" />
              <span>{item.title}</span>
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            {item.subItems.map((subItem) => (
              <DropdownMenuItem key={subItem.href}>
                <Link 
                  href={subItem.href}
                  className="w-full"
                >
                  {subItem.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link 
        href={item.href}
        className={`flex items-center space-x-2 ${
          mobile ? 'p-2 hover:bg-gray-100 rounded-lg' : ''
        } ${active ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
      >
        <Icon className="h-4 w-4" />
        <span>{item.title}</span>
      </Link>
    );
  };

  return (
    <div className="border-b bg-white sticky top-0 z-50">
      <div className="flex h-16 items-center px-4">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>

        {/* Logo */}
        <Link href="/dashboard" className="flex items-center space-x-2 mr-6">
          <Cake className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Birthday Central</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4">
          {navigationItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        {/* Right Side Items */}
        <div className="ml-auto flex items-center space-x-4">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-4">
                <h3 className="font-semibold">Notifications</h3>
                <p className="text-sm text-gray-500">You have 3 unread messages</p>
              </div>
              <DropdownMenuSeparator />
              {/* Add notification items here */}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Link href="/profile" className="flex items-center w-full">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings" className="flex items-center w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="flex flex-col p-4 space-y-2">
            {navigationItems.map((item) => (
              <NavLink key={item.href} item={item} mobile />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}