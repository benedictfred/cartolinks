import {
  ChevronDown,
  Image,
  Zap,
  Video,
  WandSparkles,
  MicVocal,
  DraftingCompass,
} from "lucide-react";
import { ManHandsUp, PenWrite } from "./icons";

const tools = [
  {
    id: 1,
    name: "Image",
    badge: "New",
    description: "Generate images from custom prompts using Flux and Ideogram.",
    icon: Image,
    bgColor: "bg-linear-[0deg,#D0E3F1_0%,#294962_100%]",
    buttonText: "Open",
  },
  {
    id: 2,
    name: "Video",
    badge: null,
    description: "Create videos with Hedra Flux, Runway Luma, and more.",
    icon: Video,
    bgColor: "bg-[oklch(79.55%_0.1875_75.3501)]",
    buttonText: "Open",
  },
  {
    id: 3,
    name: "Realtime",
    badge: null,
    description: "Real-time sketching on a canvas. Instant feedback loop.",
    icon: PenWrite,
    bgColor: "bg-linear-[0deg,#CEF6FF_0%,#7BA9FF_35%,#355CFF_100%]",
    buttonText: "Open",
  },
  {
    id: 4,
    name: "Enhancer",
    badge: "New",
    description: "Upscale with Stable Diffusion images and videos up to 32K.",
    icon: WandSparkles,
    bgColor: "bg-linear-[0deg,#888888_0%,#000000_100%]",
    buttonText: "Open",
  },
  {
    id: 5,
    name: "Edit",
    badge: null,
    description:
      "Restructure, change style, or generate New phone and extensions.",
    icon: DraftingCompass,
    bgColor: "bg-linear-[0deg,#AE91CA_0%,#592A85_60%,#180728_100%]",
    buttonText: "Open",
  },
  {
    id: 6,
    name: "Video Lipsync",
    badge: "New",
    description: "Up your video from audio files.",
    icon: MicVocal,
    bgColor: "bg-linear-[0deg,#BBCA91_0%,#3C878F_60%,#07280F_100%]",
    buttonText: "Open",
  },
  {
    id: 7,
    name: "Motion Transfer",
    badge: "New",
    description: "Transfer motion of one video to another.",
    icon: ManHandsUp,
    bgColor: "bg-[#1B1B1D]",
    buttonText: "Open",
  },
  {
    id: 8,
    name: "Train",
    badge: null,
    description:
      "Train LoRAs to replicate your style, substance or characters.",
    icon: Zap,
    bgColor: "bg-[oklch(70%_0.1776_23.29)]",
    buttonText: "Open",
  },
];

export default function GenerateSection() {
  return (
    <div className="mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Generate
        </h2>
        <button className="flex items-center gap-3 text-blue-600 hover:text-blue-700 text-sm font-medium">
          <span>Show all</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="rounded-xl p-4 hover:shadow-md transition-all duration-200 hover:border-gray-300 flex justify-between items-center"
          >
            <div className="flex gap-4 flex-1">
              <div className="flex items-center">
                <div
                  className={`${tool.bgColor} p-3 rounded-lg flex items-center`}
                >
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex flex-col justify-center flex-1">
                <div className="flex items-center gap-1 mb-1">
                  <h3 className="font-semibold text-sm shrink-0 text-gray-900 dark:text-white">
                    {tool.name}
                  </h3>
                  {tool.badge && (
                    <span className="bg-[#136AF9] text-blue-50 text-xs font-medium px-2 py-1 rounded-full">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-white text-xs leading-relaxed min-h-[3rem]">
                  {tool.description}
                </p>
              </div>
            </div>

            <button className="ml-6 bg-[#F6F6F6] text-black text-sm font-medium py-2 px-4 rounded-full transition-colors duration-200">
              {tool.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
