import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Code, Award, Download, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const skills = {
  Programming: ["Python", "JavaScript", "C"],
  "Web Development": ["HTML", "CSS", "GitHub Pages"],
  Tools: ["Git", "Cloudflare", "VS Code"],
}

const projects = [
  {
    id: 1,
    name: "Data Science Project",
    description: "A comprehensive data analysis project using Python libraries for data manipulation and insights",
    image: "/vercel.svg",
    github: "https://github.com/yawhatev/project",
    liveDemo: "https://your-ecommerce-demo.vercel.app",
    technologies: ["Python", "NumPy", "Pandas"],
  },
  {
    id: 2,
    name: "Mini JS Project",
    description: "A collection of interactive web applications built with vanilla JavaScript and modern CSS",
    image: "/window.svg",
    github: "https://github.com/yawhatev/mini_js_proj",
    liveDemo: "https://your-weather-app.vercel.app",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    name: "Aahar Project",
    description: "A food-related application designed to address food management and distribution challenges",
    image: "/file.svg",
    github: "https://github.com/yawhatev/supa",
    liveDemo: "https://your-task-manager.vercel.app",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 4,
    name: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills",
    image: "/next.svg",
    github: "https://github.com/yawhatev/portfolio",
    liveDemo: "https://your-portfolio.vercel.app",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
]

const achievements = [
  "Participated in [Hackathon Name], built a project in 24 hours",
  "Completed Python for Everybody course by Coursera",
  "Volunteered as a coding mentor for beginners",
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-x-hidden">
      {/* Enhanced animated background elements - Black & White */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles - monochrome */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-gray-800 rounded-full animate-bounce opacity-40" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gray-700 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce opacity-40" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce opacity-50" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
        <div className="absolute bottom-60 left-20 w-2 h-2 bg-gray-800 rounded-full animate-bounce opacity-40" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gray-900 rounded-full animate-bounce opacity-30" style={{animationDelay: '0.8s', animationDuration: '4.2s'}}></div>
        
        {/* Gradient orbs - monochrome */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-gray-300/10 via-gray-400/10 to-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-gray-200/10 via-gray-300/10 to-gray-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-300/8 to-gray-400/8 rounded-full blur-2xl animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-gray-400/8 to-gray-500/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
      </div>
      
      {/* Enhanced Header with advanced glassmorphism - Black & White */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-gray-200/60 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(249,250,251,0.98) 50%, rgba(243,244,246,0.98) 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.10)'
              }}>
        <div className="container mx-auto px-6 py-5">
          <nav className="flex justify-between items-center max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Resima Budhathoki
            </h1>
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium relative group hover:scale-105">
                About
                <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full rounded-full"></span>
                <span className="absolute -inset-2 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium relative group hover:scale-105">
                Skills
                <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full rounded-full"></span>
                <span className="absolute -inset-2 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium relative group hover:scale-105">
                Projects
                <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full rounded-full"></span>
                <span className="absolute -inset-2 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
              <a href="#achievements" className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium relative group hover:scale-105">
                Achievements
                <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 group-hover:w-full rounded-full"></span>
                <span className="absolute -inset-2 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
              <a href="#contact" className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white px-6 py-2 rounded-full hover:from-gray-900 hover:via-black hover:to-gray-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-0.5 relative overflow-hidden group">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
            
            {/* Enhanced Mobile Menu Button - Black & White */}
            <button className="md:hidden flex flex-col gap-1.5 p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <span className="w-6 h-0.5 bg-gradient-to-r from-gray-800 to-gray-900 transition-all duration-300 group-hover:rotate-45 group-hover:translate-y-1"></span>
              <span className="w-6 h-0.5 bg-gradient-to-r from-gray-800 to-gray-900 transition-all duration-300 group-hover:opacity-0"></span>
              <span className="w-6 h-0.5 bg-gradient-to-r from-gray-800 to-gray-900 transition-all duration-300 group-hover:-rotate-45 group-hover:-translate-y-1"></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Enhanced Hero Section - Black & White */}
      <section id="about" className="relative py-20 overflow-hidden">
        {/* Advanced Background Decorative Elements - Monochrome */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-400/15 to-gray-600/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-gray-300/15 to-gray-500/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
          <div className="absolute top-20 left-1/2 w-60 h-60 bg-gradient-to-br from-gray-200/10 to-gray-400/10 rounded-full blur-2xl animate-bounce" style={{animationDuration: '6s'}}></div>
          
          {/* Floating geometric shapes - monochrome */}
          <div className="absolute top-32 right-1/4 w-4 h-4 bg-gradient-to-r from-gray-700 to-gray-800 rotate-45 animate-bounce opacity-40" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-20 w-2 h-8 bg-gradient-to-b from-gray-500 to-gray-700 animate-bounce opacity-30" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Enhanced Profile Picture with 3D effects */}
              <div className="flex justify-center -mt-20">
                <div className="relative group">
                  {/* Multiple decorative rings with different animations - Monochrome */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-full opacity-15 blur-xl animate-pulse group-hover:opacity-25 transition-opacity duration-500"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 rounded-full opacity-20 blur-lg animate-ping" style={{animationDuration: '3s'}}></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full opacity-25 blur-md animate-pulse" style={{animationDuration: '2s'}}></div>

                  {/* Main profile picture with enhanced 3D effect */}
                  <div className="relative w-96 h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/60 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-3xl group-hover:border-white/80"
                       style={{
                         boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(255,255,255,0.2)',
                         background: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
                       }}>
                    <Image
                      src="/profile-picture.jpg"
                      alt="Resima Budhathoki Profile Picture"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover object-bottom hover:scale-110 transition-transform duration-700 rounded-full filter hover:brightness-110"
                    />
                    
                    {/* Gloss effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  </div>

                  {/* Enhanced floating badges with animations - Monochrome */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-bounce hover:scale-110 transition-transform duration-300"
                       style={{animationDuration: '2s'}}>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      Available
                    </span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 hover:scale-110 transition-transform duration-300 animate-pulse">
                    <MapPin className="w-4 h-4" />
                    Nepal
                  </div>
                  
                  {/* Additional floating elements - Monochrome */}
                  <div className="absolute top-1/4 -left-8 w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-1/3 -right-6 w-2 h-2 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full animate-pulse opacity-40" style={{animationDelay: '2s'}}></div>
                </div>
              </div>

              {/* Enhanced Content with staggered animations */}
              <div className="text-center lg:text-left space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 border border-gray-300 hover:scale-105">
                    <Calendar className="w-4 h-4" />
                    Computer Engineering Student
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse ml-1"></div>
                  </div>

                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-gray-700 block">Hi, I'm</span>
                    <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent block hover:scale-105 transition-transform duration-500 cursor-default">
                      Resima Budhathoki
                    </span>
                  </h1>

                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Passionate computer engineering student and aspiring web developer, eager to build{" "}
                    <span className="text-gray-800 font-semibold hover:text-gray-900 transition-colors duration-300 cursor-default">real-world projects</span> and{" "}
                    <span className="text-gray-700 font-semibold hover:text-gray-800 transition-colors duration-300 cursor-default">explore new technologies</span> to solve everyday problems.
                  </p>
                </div>

                {/* Enhanced animated stats - Monochrome */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  <div className="text-center group cursor-default">
                    <div className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">10+</div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Projects</div>
                  </div>
                  <div className="text-center group cursor-default">
                    <div className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">3+</div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Languages</div>
                  </div>
                  <div className="text-center group cursor-default">
                    <div className="text-3xl font-bold bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">2+</div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">Years Learning</div>
                  </div>
                </div>

                {/* Enhanced Action Buttons with advanced effects - Monochrome */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-900 hover:via-black hover:to-gray-800 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
                    asChild
                  >
                    <Link href="https://github.com/yawhatev" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      View My Work
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 hover:border-gray-400 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 hover:-translate-y-0.5"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download CV
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
                    asChild
                  >
                    <Link href="mailto:budhathokiresima@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Get In Touch
                    </Link>
                  </Button>
                </div>

                {/* Social Links - Monochrome */}
                <div className="flex gap-4 justify-center lg:justify-start">
                  <Link
                    href="https://github.com/yawhatev"
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-800 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/resima-budhathoki-033471311"
                    className="w-12 h-12 bg-gray-200 hover:bg-gray-700 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="mailto:budhathokiresima@gmail.com"
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section with advanced animations - Black & White */}
      <section id="skills" className="py-20 bg-gradient-to-br from-white/80 via-gray-50/40 to-gray-100/40 backdrop-blur-sm relative overflow-hidden">
        {/* Floating background elements - Monochrome */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-gray-400/15 to-gray-500/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-gray-300/15 to-gray-400/15 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300 cursor-default">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 hover:text-gray-700 transition-colors duration-300">Technologies and tools I work with</p>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-black mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, skillList], index) => {
              const gradients = [
                "from-gray-700 to-gray-800",
                "from-gray-800 to-gray-900", 
                "from-gray-600 to-gray-700"
              ];
              const bgGradients = [
                "from-gray-100/90 to-gray-200/90",
                "from-gray-200/90 to-gray-300/90",
                "from-gray-50/90 to-gray-100/90"
              ];
              
              return (
                <Card
                  key={category}
                  className="hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white/98 backdrop-blur-lg border-2 border-gray-200/60 shadow-xl group relative overflow-hidden min-h-[280px] hover:border-gray-300/80"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(249,250,251,0.98) 100%)'
                  }}
                >
                  {/* Background gradient overlay with animation - Monochrome */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[index]} opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-105`}></div>
                  
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <CardHeader className="pb-6 relative z-10">
                    <CardTitle className="text-2xl text-gray-800 flex items-center gap-4 mb-4 group-hover:scale-105 transition-transform duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${gradients[index]} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden`}>
                        <Code className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      </div>
                      <span className="font-bold group-hover:text-gray-900 transition-colors duration-300">{category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10 px-6 pb-8">
                    <div className="flex flex-wrap gap-3">
                      {skillList.map((skill, skillIndex) => (
                        <Badge
                          key={skill}
                          className={`bg-gradient-to-r ${gradients[index]} text-white hover:shadow-lg border-0 shadow-md transition-all duration-300 px-4 py-2 text-base font-medium hover:scale-110 hover:-translate-y-1 relative overflow-hidden group/badge`}
                          style={{animationDelay: `${skillIndex * 100}ms`}}
                        >
                          <span className="relative z-10">{skill}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-500"></div>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section - Black & White */}
      <section id="projects" className="py-20 relative overflow-hidden">
        {/* Background decorative elements - Monochrome */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-r from-gray-400/15 to-gray-500/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-gray-300/15 to-gray-400/15 rounded-full blur-xl animate-bounce" style={{animationDuration: '5s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300 cursor-default">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 hover:text-gray-700 transition-colors duration-300">Some of my recent work and contributions</p>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-black mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-3 group bg-white/95 backdrop-blur-lg border-2 border-white/50 shadow-xl relative min-h-[420px] hover:border-white/80"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Enhanced background gradient overlay - Monochrome */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/60 via-gray-200/60 to-gray-300/60 opacity-40 group-hover:opacity-60 transition-all duration-500 group-hover:scale-105"></div>
                
                {/* Animated border effect - Monochrome */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/0 via-gray-700/30 to-gray-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
                
                <div className="relative z-10 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/globe.svg"}
                      alt={project.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-700 filter group-hover:brightness-110"
                    />
                    
                    {/* Enhanced overlay with better animations */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                      <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Button
                          size="sm"
                          variant="secondary"
                          asChild
                          className="bg-white/95 hover:bg-white text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200"
                        >
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          asChild
                          className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                        >
                          <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </div>

                <CardHeader className="relative z-10 pb-4">
                  <CardTitle className="text-2xl text-gray-800 font-bold group-hover:text-gray-900 transition-colors duration-300 group-hover:scale-105 transform transition-transform">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 px-6 pb-8">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        className="bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:shadow-lg border-0 shadow-md transition-all duration-300 px-3 py-1.5 text-sm font-medium hover:scale-110 hover:-translate-y-1 relative overflow-hidden group/tech"
                        style={{animationDelay: `${techIndex * 50}ms`}}
                      >
                        <span className="relative z-10">{tech}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover/tech:translate-x-[100%] transition-transform duration-500"></div>
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 border-2 border-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 bg-white/90 backdrop-blur-sm text-gray-700 hover:border-gray-400 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
                    >
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        GitHub
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-900 hover:via-black hover:to-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 relative overflow-hidden group/btn"
                    >
                      <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Live Demo
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section - Black & White */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-white/80 via-gray-50/40 to-gray-100/40 backdrop-blur-sm relative overflow-hidden">
        {/* Background decorative elements - Monochrome */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-gray-400/15 to-gray-500/15 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-28 h-28 bg-gradient-to-r from-gray-300/15 to-gray-400/15 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300 cursor-default">
              Achievements
            </h2>
            <p className="text-xl text-gray-600 hover:text-gray-700 transition-colors duration-300">Milestones and accomplishments in my journey</p>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-black mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 bg-white/95 backdrop-blur-lg border-2 border-white/50 shadow-xl group relative overflow-hidden min-h-[120px] hover:border-white/80"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Enhanced background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/60 to-gray-100/60 opacity-40 group-hover:opacity-60 transition-all duration-500 group-hover:scale-105"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <CardContent className="flex items-center gap-6 p-8 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden">
                        <Award className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-slate-700 font-medium leading-relaxed group-hover:text-slate-800 transition-colors duration-300">{achievement}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section - Black & White */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background decorative elements - Monochrome */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-gray-400/20 to-gray-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-full blur-xl animate-bounce" style={{animationDuration: '5s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300 cursor-default">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 hover:text-gray-700 transition-colors duration-300">Let's connect and collaborate on exciting projects</p>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-black mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="hover:shadow-3xl transition-all duration-700 bg-white/95 backdrop-blur-lg border-2 border-white/50 shadow-xl relative overflow-hidden hover:border-white/80 hover:scale-105 hover:-translate-y-2"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)'
                  }}>
              {/* Enhanced background gradient overlay - Monochrome */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/60 to-gray-100/60 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <CardContent className="p-10 relative z-10">
                <div className="grid gap-8">
                  <div className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-slate-50/80 to-slate-100/80 hover:from-slate-100/80 hover:to-slate-200/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-xl backdrop-blur-sm border border-white/30 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden">
                      <Github className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 text-xl mb-2 group-hover:text-gray-700 transition-colors duration-300">GitHub</h3>
                      <Link
                        href="https://github.com/yawhatev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg hover:underline"
                      >
                        github.com/yawhatev
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-gray-50/80 to-gray-100/80 hover:from-gray-100/80 hover:to-gray-200/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-xl backdrop-blur-sm border border-white/30 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden">
                      <Linkedin className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 text-xl mb-2 group-hover:text-gray-700 transition-colors duration-300">LinkedIn</h3>
                      <Link
                        href="https://www.linkedin.com/in/resima-budhathoki-033471311"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg hover:underline"
                      >
                        linkedin.com/in/resima-budhathoki-033471311
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-gray-50/80 to-gray-100/80 hover:from-gray-100/80 hover:to-gray-200/80 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-xl backdrop-blur-sm border border-white/30 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden">
                      <Mail className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 text-xl mb-2 group-hover:text-gray-700 transition-colors duration-300">Email</h3>
                      <Link
                        href="mailto:budhathokiresima@gmail.com"
                        className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg hover:underline"
                      >
                        budhathokiresima@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer - Black & White */}
      <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-black text-white py-12 relative overflow-hidden">
        {/* Background decorative elements - Monochrome */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">
              Resima Budhathoki
            </h3>
            <p className="text-slate-300 text-lg">Computer Engineering Student & Web Developer</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <Link
              href="https://github.com/yawhatev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/resima-budhathoki-033471311"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:budhathokiresima@gmail.com"
              className="w-10 h-10 bg-slate-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-400 hover:text-slate-300 transition-colors duration-300">
              © 2024 Resima Budhathoki. Built with{" "}
              <span className="text-gray-300 font-semibold">Next.js</span>{" "}
              and{" "}
              <span className="text-gray-400 font-semibold">Tailwind CSS</span>
              .
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Designed with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
