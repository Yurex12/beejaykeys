import {
  ChartNoAxesCombined,
  ChevronRight,
  Home,
  LucideProps,
  MessageCircleMoreIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Link } from "react-router-dom";

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
        title: "Skills",
        url: "/dashboard/skills",
      },
    ],
  },
  {
    title: "Messages",
    url: "dashboard/messages",
    icon: MessageCircleMoreIcon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="md:mt-20 md:px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="text-2xl">
              {items.map((item) => (
                <>
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
                                    <Link to={subItem.url}>
                                      <span>{subItem.title}</span>
                                    </Link>
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
                        <Link to={`/${item.url}`}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
