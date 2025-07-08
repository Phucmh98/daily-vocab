import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Star, SquarePen, Trash2 } from "lucide-react";

const CardItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <Card className="p-4 gap-3">
        <CardHeader className="px-2">
          <CardTitle className="flex items-center">
            {title}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="ml-auto">
                  <EllipsisVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-32" align="end">
                <DropdownMenuItem>
                  <Star />
                  Make star
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SquarePen />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Trash2 /> Remove
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-2">
          <div className="flex truncate">
            <p>{description}</p>
            <span className="mx-2">•</span>
            <Badge variant="outline">81 terms</Badge>
            <span className="mx-2">•</span>

            <p>by you</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
export default CardItem;
