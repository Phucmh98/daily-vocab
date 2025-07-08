import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge, EllipsisVertical, SquarePen, Star, Trash2 } from "lucide-react";
const CardItemVoca = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card className="p-0 gap-3">
      <CardHeader className="p-0 pt-2">
        <CardTitle className="">
          <div className="flex items-center py-1 px-3">
            {title}

            <Button
              variant="outline"
              type="button"
              className="ml-auto rounded-full h-10"
            >
              <Trash2 />
            </Button>
          </div>
          <Separator className="my-2" />
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <div className="grid grid-cols-2 pb-5 gap-5 text-xs">
          <div className="flex flex-col gap-1.5">
            <Input type="text" placeholder="Type volcabulary" />
            <div className="flex uppercase justify-between items-center">
              <p className="font-medium">Temr</p>
              <p className="font-medium">ENGLISH</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Input type="text" placeholder="Type volcabulary" />
            <div className="flex uppercase justify-between items-center">
              <p className="font-medium">definition</p>
              <p className="font-medium">Vietnamese</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItemVoca;
