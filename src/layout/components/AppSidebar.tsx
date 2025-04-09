import { ForwardRefExoticComponent, Fragment, RefAttributes } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChartNoAxesCombined,
  ChevronRight,
  Home,
  LucideProps,
  MessageCircleMoreIcon,
  UserIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/features/auth/hooks/useLogout";
import { HiLogout } from "react-icons/hi";
import { MOBILE_BREAKPOINT } from "@/hooks/use-mobile";

type Items = {
  title: string;
  url?: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

type Link = {
  title: string;
  url: string;
};

type Item = Items & {
  links?: Link[];
};

// Menu items.
const items: Item[] = [
  {
    title: "Overview",
    url: "dashboard/overview",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Content",
    icon: Home,
    links: [
      {
        title: "Projects",
        url: "/dashboard/projects",
      },
      {
        title: "Faq",
        url: "/dashboard/faqs",
      },
      {
        title: "Links",
        url: "/dashboard/links",
      },
      {
        title: "Testimonials",
        url: "/dashboard/testimonials",
      },
      {
        title: "Services",
        url: "/dashboard/services",
      },
    ],
  },
  {
    title: "Messages",
    url: "dashboard/messages",
    icon: MessageCircleMoreIcon,
  },
  {
    title: "Users",
    url: "dashboard/user",
    icon: UserIcon,
  },
];

export function AppSidebar() {
  const { logout, isLoggingOut } = useLogout();
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar>
      <SidebarContent className="md:mt-20 md:px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="text-2xl">
              {items.map((item) => (
                <Fragment key={item.title}>
                  {item?.links ? (
                    <>
                      <Collapsible
                        key={item.title}
                        asChild
                        className="group/collapsible"
                        defaultOpen
                      >
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton tooltip={item.title}>
                              {item.icon && <item.icon />}
                              <span>{item.title}</span>
                              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item.links.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.title}>
                                  <SidebarMenuSubButton asChild>
                                    <NavLink
                                      to={subItem.url}
                                      onClick={
                                        MOBILE_BREAKPOINT > window.innerWidth
                                          ? toggleSidebar
                                          : () => {}
                                      }
                                    >
                                      <span>{subItem.title}</span>
                                    </NavLink>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    </>
                  ) : (
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={`/${item.url}`}
                          onClick={
                            MOBILE_BREAKPOINT > window.innerWidth
                              ? toggleSidebar
                              : () => {}
                          }
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </Fragment>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mb-20">
        <Button
          className="mx-auto w-40 border border-green-500 bg-transparent text-base text-green-500 hover:bg-transparent"
          onClick={() => logout()}
          disabled={isLoggingOut}
        >
          Logout
          <HiLogout />
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
