import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen py-10 bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mb-6">
          Oops! Page not found
        </p>

        {/* Animated SVG */}
        <div className="mb-6">
          <svg
            className="w-64 h-64 mx-auto"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#6B7280"
              strokeWidth="4"
              strokeDasharray="50 10"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 100 100"
                to="360 100 100"
                dur="10s"
                repeatCount="indefinite"
              />
            </circle>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="24"
              fill="#4B5563"
            >
              Not Found
            </text>
          </svg>
        </div>

        <p className="text-xl text-gray-600 mb-6">
          We're sorry, the page you requested could not be found.
          <br />
          Please go back to the homepage.
        </p>

        <Button className="">
          <Link href="/" className="flex gap-1 items-center">
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
