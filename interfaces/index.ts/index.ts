export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface CardProps {
  title: string;
  description: string;
  image: string;
}
