import * as React from "react";

import { FaStar } from "react-icons/fa6";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type MoviecardProps = { name: string; rating: number; image: string };

export const Moviecard = ({ name, rating, image }: MoviecardProps) => {
  return (
    <div>
      <Card className="w-[230] h-[439] ">
        <CardContent className="w-[229] h-[340] p-0">
          <img src="movie1.jpg" className="" />
        </CardContent>

        <div className="py-2 px-2">
          <CardDescription className="flex">
            <FaStar color="#FDE047" />
            {(rating = 6.9)}/10
          </CardDescription>

          <CardFooter className="px-0">
            <p>{(name = "Dear Santa")}</p>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};
