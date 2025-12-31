import arduino_uno from './arduino_uno.png'
import breadboard from './breadboard.png'
import resistor_kit from './resistor_kit.png'
import capacitor_kit from './capacitor_kit.png'
import op_amp_lm358 from './op_amp_lm358.png'
import ultrasonic_sensor from './ultrasonic_sensor.png'
import lcd_16x2 from './lcd_16x2.png'
import relay_module from './relay_module.png'
import jumper_wires from './jumper_wires.png'
import multimeter from './multimeter.png'

import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
  logo,
  hero_img,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  about_img,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon
}

export const products = [
  {
    _id: "elec01",
    name: "Arduino UNO R3 Compatible Board",
    description:
      "A beginner-friendly microcontroller board used for prototyping and learning embedded systems. Great for sensors, motors, and small automation projects.",
    price: 29,
    image: [arduino_uno],
    category: "Boards",
    subCategory: "Microcontrollers",
    sizes: ["UNO R3", "UNO R3 + Cable", "UNO R3 Starter"],
    date: 1716621345448,
    bestseller: true
  },
  {
    _id: "elec02",
    name: "Solderless Breadboard (830 Tie-Point)",
    description:
      "Reusable prototyping breadboard for quick circuit builds without soldering. Ideal for Arduino and general electronics experiments.",
    price: 7,
    image: [breadboard],
    category: "Prototyping",
    subCategory: "Breadboards",
    sizes: ["400 Tie-Point", "830 Tie-Point", "2-Pack"],
    date: 1716622345448,
    bestseller: true
  },
  {
    _id: "elec03",
    name: "Resistor Kit (Assorted Values)",
    description:
      "Assorted resistor kit for prototyping, repairs, and labs. Includes common values for voltage dividers, pull-ups, and current limiting.",
    price: 12,
    image: [resistor_kit],
    category: "Components",
    subCategory: "Resistors",
    sizes: ["All Values", "1–100Ω", "101–1kΩ", "1.1k–100kΩ", "100kΩ+"],
    date: 1716234545448,
    bestseller: true
  },
  {
    _id: "elec04",
    name: "Capacitor Kit (Ceramic + Electrolytic)",
    description:
      "Mixed capacitor kit for filtering, decoupling, timing circuits, and audio projects. Useful for breadboard prototyping.",
    price: 14,
    image: [capacitor_kit],
    category: "Components",
    subCategory: "Capacitors",
    sizes: ["All Values", "pF Range", "nF Range", "µF Range", "10µF+"],
    date: 1716623345448,
    bestseller: false
  },
  {
    _id: "elec05",
    name: "LM358 Operational Amplifier Module",
    description:
      "Dual op-amp based module for signal conditioning, comparators, and simple analog amplification. Great for sensors and audio-band experiments.",
    price: 6,
    image: [op_amp_lm358],
    category: "Modules",
    subCategory: "Analog",
    sizes: ["LM358", "LM358 + Headers", "2-Pack"],
    date: 1716624445448,
    bestseller: false
  },
  {
    _id: "elec06",
    name: "Ultrasonic Distance Sensor (HC-SR04)",
    description:
      "Distance measurement sensor for robotics and automation. Commonly used with Arduino to detect objects and measure range.",
    price: 5,
    image: [ultrasonic_sensor],
    category: "Sensors",
    subCategory: "Distance",
    sizes: ["HC-SR04", "Waterproof", "2-Pack"],
    date: 1716625545448,
    bestseller: true
  },
  {
    _id: "elec07",
    name: "16x2 LCD Display Module",
    description:
      "Classic character LCD for showing text, values, and menus. Works well for Arduino projects and basic embedded UIs.",
    price: 9,
    image: [lcd_16x2],
    category: "Displays",
    subCategory: "LCD",
    sizes: ["16x2", "16x2 + I2C", "20x4"],
    date: 1716626645448,
    bestseller: false
  },
  {
    _id: "elec08",
    name: "Relay Module (5V Trigger)",
    description:
      "Switch higher-voltage loads using a microcontroller. Common for controlling lamps, fans, and other devices safely with isolation.",
    price: 8,
    image: [relay_module],
    category: "Modules",
    subCategory: "Power",
    sizes: ["1-Channel", "2-Channel", "4-Channel"],
    date: 1716627745448,
    bestseller: false
  },
  {
    _id: "elec09",
    name: "Jumper Wire Set (Male/Female)",
    description:
      "Essential prototyping wires for breadboards and Arduino headers. Flexible and reusable for quick connections.",
    price: 6,
    image: [jumper_wires],
    category: "Prototyping",
    subCategory: "Wires",
    sizes: ["M-M", "M-F", "F-F", "Combo Pack"],
    date: 1716628845448,
    bestseller: true
  },
  {
    _id: "elec10",
    name: "Digital Multimeter",
    description:
      "Basic multimeter for measuring voltage, current, resistance, and continuity. A must-have tool for debugging circuits.",
    price: 24,
    image: [multimeter],
    category: "Tools",
    subCategory: "Test Equipment",
    sizes: ["Basic", "Auto-Ranging", "With Leads Kit"],
    date: 1716629945448,
    bestseller: false
  }
]