"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

// Mapping các route với tên trang tương ứng
const pageMapping = {
  "/my-lists": "My Lists",
  "/review": "Review",
  "/quiz": "Quiz/Test",
  "/progress": "Progress",
  "/settings": "Settings",
};

const DynamicBreadcrumb = () => {
  const pathname = usePathname();

  // Lấy tên trang hiện tại từ pathname
  const currentPageTitle =
    pageMapping[pathname as keyof typeof pageMapping] || "Dashboard";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">Daily Vocab</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPageTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
