"use client";

import { Url } from "@/utils/shared/types";
import * as React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const Map = ({ data }: { data: Url }) => {

  return (
    <div className="pointer-events-none">
      <ComposableMap>
        <Geographies
          fill="#1e293b"
          stroke="#475569"
          strokeWidth="0.2px"
          geography="/features.json"
        >
          {({ geographies }: { geographies: any }) =>
            geographies.map((geo: any) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>

        {data.strikes.map((data, index) => (
          <Marker key={index} coordinates={[data.lon, data.lat]}>
             <circle r={2} fill="#F53" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default Map;
