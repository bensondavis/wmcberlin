interface PricingCardProps {
  title: string;
  icon: React.ReactNode;
  price: string;
  key?: string | number;
  onClick: (title: string) => void;
}

export default PricingCardProps;