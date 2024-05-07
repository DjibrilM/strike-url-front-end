import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MapChart from "@/components/MapChart";
import { Url } from "@/utils/shared/types";
import { StrikesList } from "../StrikesList";

const UrlDataTab = ({data}:{data:Url}) => {
  return (
    <Tabs defaultValue="location" className="w-full mt-10">
      <TabsList className="grid gap-6 w-full grid-cols-2 url-tab-header">
        <TabsTrigger value="location" className="tab-element">
          Location
        </TabsTrigger>

        <TabsTrigger value="list" className="tab-element">
          List
        </TabsTrigger>
      </TabsList>

      <TabsContent value="location">
        <MapChart data={data} />
      </TabsContent>

      <TabsContent value="list">
        <StrikesList strikes={data?.strikes || []}/>
      </TabsContent>
    </Tabs>
  );
};

export default UrlDataTab;
