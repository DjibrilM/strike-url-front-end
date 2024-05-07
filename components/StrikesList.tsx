import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Strike } from "@/utils/shared/types";
import Visibility from "./common/Visible";

const strikes = [
  {
    strike: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    strike: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    strike: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    strike: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    strike: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    strike: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    strike: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function StrikesList({ strikes }: { strikes: Strike[] }) {
  const createDate = (date: Date) => {
    const createDate = new Date(date);
    let englishDateFormat = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(createDate);

    return englishDateFormat;
  };

  return (
    <div className="">
      <Table>
        <TableHeader className="">
          <TableRow className="border-none font-bold space-x-6 text-white/80">
            <TableHead className="bg-white/5 rounded-l-lg">Country</TableHead>
            <TableHead className="bg-white/5 text-center">
              Region Name
            </TableHead>
            <TableHead className="bg-white/5 text-center">Timezone</TableHead>
            <TableHead className="text-center bg-white/5 rounded-r-lg">
              City
            </TableHead>

            <TableHead className="text-center bg-white/5 rounded-r-lg">
              Date
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {strikes.map((strike) => (
            <TableRow className="text-white/75" key={strike.country}>
              <TableCell className="font-medium strike-li">
                {strike.country}
              </TableCell>
              <TableCell className="font-medium text-center strike-li">
                {strike.regionName}
              </TableCell>
              <TableCell className="text-center strike-li">
                {strike.timezone}
              </TableCell>
              <TableCell className="text-center strike-li">
                {strike.city}
              </TableCell>
              <TableCell className="text-center strike-li">
                {createDate(strike.created_at)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Visibility visible={strikes.length < 1}>
        <p className="text-center mt-60 font-bold text-2xl text-yellow-50">No Strike Yet</p>
      </Visibility>
    </div>
  );
}
