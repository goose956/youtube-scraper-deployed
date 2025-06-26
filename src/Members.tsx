import { LayoutDashboard, User, Settings, LogOut, Bell, Search, BarChart3, PieChart } from 'lucide-react';

export default function Members() {
  const salesData = [
    { month: 'Jan', sales: 4200 },
    { month: 'Feb', sales: 5800 },
    { month: 'Mar', sales: 3600 },
    { month: 'Apr', sales: 7200 },
    { month: 'May', sales: 8900 },
    { month: 'Jun', sales: 7800 }
  ];

  const userData = [
    { name: 'Active', value: 60, color: '#10b981' },
    { name: 'Inactive', value: 25, color: '#ef4444' },
    { name: 'Pending', value: 15, color: '#f59e0b' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">youtube scraper</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent w-64"
              />
            </div>
            <button className="relative p-2 text-gray-400 hover:text-gray-600">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">Member</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg h-[calc(100vh-73px)] sticky top-[73px]">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <a 
                  href="#dashboard" 
                  className="flex items-center space-x-3 px-4 py-3 text-teal-600 bg-teal-50 rounded-lg font-medium"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a 
                  href="#profile" 
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a 
                  href="#settings" 
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <button className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg w-full text-left transition-colors">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
              <p className="text-gray-600">Welcome back! Here's what's happening with your account.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Monthly Sales</h3>
                  <BarChart3 className="w-6 h-6 text-teal-600" />
                </div>
                <div className="h-64 flex items-end justify-between space-x-2 px-4">
                  {salesData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="bg-teal-500 w-full rounded-t-md hover:bg-teal-600 transition-colors relative group"
                        style={{ height: `${(item.sales / 9000) * 100}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          $${item.sales.toLocaleString()}
                        </div>
                      </div>
                      <span className="text-sm text-gray-600 mt-2">{item.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">User Status</h3>
                  <PieChart className="w-6 h-6 text-teal-600" />
                </div>
                <div className="h-64 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <svg width="192" height="192" className="transform -rotate-90">
                      <circle cx="96" cy="96" r="80" fill="#10b981" strokeWidth="0" 
                        strokeDasharray={`${(userData[0].value / 100) * 502} 502`} strokeDashoffset="0" />
                      <circle cx="96" cy="96" r="80" fill="#ef4444" strokeWidth="0" 
                        strokeDasharray={`${(userData[1].value / 100) * 502} 502`} 
                        strokeDashoffset={`-${(userData[0].value / 100) * 502}`} />
                      <circle cx="96" cy="96" r="80" fill="#f59e0b" strokeWidth="0" 
                        strokeDasharray={`${(userData[2].value / 100) * 502} 502`} 
                        strokeDashoffset={`-${((userData[0].value + userData[1].value) / 100) * 502}`} />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-gray-700">Users</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center space-x-6 mt-4">
                  {userData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-gray-600">{item.name} ({item.value}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}