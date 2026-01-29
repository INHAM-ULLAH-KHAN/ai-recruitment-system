import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[rgb(250,250,250)] w-screen min-h-screen flex flex-col justify-center items-center p-4 md:p-8">

      {/* Top brand content */}
      <div className="w-full max-w-md flex flex-col items-center justify-center gap-4 mb-12">
        <div className="flex flex-row items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(244 58% 51%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
            <path d="M20 3v4"></path>
            <path d="M22 5h-4"></path>
            <path d="M4 17v2"></path>
            <path d="M5 18H3"></path>
          </svg>
          <h1 className="text-black text-2xl font-bold pl-2">TalentAI</h1>
        </div>
        <h2 className="text-gray-400 text-center">AI-Powered Recruitment Platform</h2>
      </div>

      {/* Roles DIV */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4">

        {/* Recruiter Card */}
        <Link href="/auth/register?role=recruiter" className="w-full md:w-[35%]">
          <div className="bg-white flex flex-col items-center justify-center gap-4 p-6 rounded-lg cursor-pointer h-60 md:h-[60%]">
            <div className="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(244 58% 51%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
              <h2 className="text-black text-xl md:text-2xl pl-3">Recruiter</h2>
            </div>
            <p className="text-gray-400 text-center text-sm md:text-base">Post Jobs, find top talent, and manage your hiring pipeline with AI-powered matching</p>
          </div>
        </Link>

        {/* Applicant Card */}
        <Link href="/auth/register?role=applicant" className="w-full md:w-[35%]">
          <div className="bg-white flex flex-col items-center justify-center gap-4 p-6 rounded-lg cursor-pointer h-60 md:h-[60%]">
            <div className="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(244 58% 51%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                <path d="M18 20a6 6 0 0 0-12 0"></path>
                <circle cx="12" cy="10" r="4"></circle>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <h2 className="text-black text-xl md:text-2xl pl-3">Applicant</h2>
            </div>
            <p className="text-gray-400 text-center text-sm md:text-base">Discover personalized job matches and get hired faster with AI resume analysis</p>
          </div>
        </Link>

      </div>
    </div>
  );
}
