import { Loader } from "lucide-react";
import { Button as DefaultButton } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button";
import Visibility from "./Visible";
import { cn } from "@/lib/cn";
import React, { HTMLAttributes, JSX } from "react";

export interface Props
  extends React.DetailedHTMLProps<
    ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className: string;
  disbled?: boolean;
  loading?: boolean;
  children: React.JSX.Element | string;
}

export const Button: React.FC<Props> = ({
  className,
  loading,
  disbled,
  children,
  ...props
}) => {
  return (
    <DefaultButton {...props} className={className} disabled={disbled || loading}>
      <Visibility visible={loading || false}>
        <Loader
          enableBackground="transparent"
          className={cn("mr-2 h-10 bg-transparent animate-spin")}
        />
      </Visibility>

      <Visibility visible={!loading}>{children}</Visibility>
    </DefaultButton>
  );
};
