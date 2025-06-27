import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../UseContext/AuthProvider';
import { HendleContext } from '../../UseContext/HendleProvider';
import { Link } from 'react-router-dom';

const UserDashBoard = () => {
    const { user, loading } = useContext(AuthContext);
    const { currentUser } = useContext(HendleContext);
    
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [stats, setStats] = useState({
        totalBorrowed: 0,
        pendingRequests: 0,
        approvedBooks: 0,
        overdueBooks: 0
    });
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        if (!user || loading) return;
        
        const fetchUserData = async () => {
            try {
                // Fetch borrowed books
                const borrowedRes = await fetch(`http://localhost:5000/borrowed?email=${user.email}`);
                const borrowedData = await borrowedRes.json();
                setBorrowedBooks(borrowedData);
                
                // Calculate statistics
                const pending = borrowedData.filter(book => book.status === 'pending').length;
                const approved = borrowedData.filter(book => book.status === 'approved').length;
                const overdue = borrowedData.filter(book => {
                    if (book.status === 'approved' && book.dueDate) {
                        return new Date(book.dueDate) < new Date();
                    }
                    return false;
                }).length;
                
                setStats({
                    totalBorrowed: borrowedData.length,
                    pendingRequests: pending,
                    approvedBooks: approved,
                    overdueBooks: overdue
                });
                
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setDataLoading(false);
            }
        };
        
        fetchUserData();
    }, [user, loading]);

    if (loading || dataLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-green-700 font-medium">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 p-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-6 mb-6 md:mb-0">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                {currentUser?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800">
                                    Welcome, {currentUser?.name || 'Student'}!
                                </h1>
                                <p className="text-gray-600 text-lg">
                                    {currentUser?.department || 'Student'} • ID: {currentUser?.studentId || 'N/A'}
                                </p>
                                <p className="text-gray-500">{user?.email}</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">{new Date().toLocaleDateString()}</div>
                            <div className="text-gray-500">Today's Date</div>
                        </div>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Total Borrowed</p>
                                <p className="text-3xl font-bold text-blue-600">{stats.totalBorrowed}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Pending Requests</p>
                                <p className="text-3xl font-bold text-yellow-600">{stats.pendingRequests}</p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Approved Books</p>
                                <p className="text-3xl font-bold text-green-600">{stats.approvedBooks}</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Overdue Books</p>
                                <p className="text-3xl font-bold text-red-600">{stats.overdueBooks}</p>
                            </div>
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link to="/books" className="group">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform group-hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <svg className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Browse Books</h3>
                                <p className="text-blue-100">Explore our extensive collection</p>
                            </div>
                        </Link>

                        <Link to="/pending-request" className="group">
                            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white hover:from-green-600 hover:to-green-700 transition-all duration-200 transform group-hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <svg className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">My Requests</h3>
                                <p className="text-green-100">View pending book requests</p>
                            </div>
                        </Link>

                        <Link to="/user-approved-list" className="group">
                            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform group-hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <svg className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Approved Books</h3>
                                <p className="text-purple-100">View approved borrowings</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Recent Borrowed Books */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
                        <div className="space-y-4">
                            {borrowedBooks.slice(0, 5).map((book, index) => (
                                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <div className={`w-3 h-3 rounded-full ${
                                        book.status === 'approved' ? 'bg-green-500' : 
                                        book.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                                    }`}></div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800">{book.bookTitle}</h3>
                                        <p className="text-sm text-gray-600">
                                            {book.status === 'approved' ? 'Approved' : 
                                             book.status === 'pending' ? 'Pending' : 'Returned'}
                                        </p>
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {new Date(book.borrowDate).toLocaleDateString()}
                                    </div>
                                </div>
                            ))}
                            {borrowedBooks.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                    No borrowing activity yet. Start by browsing books!
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Announcements */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Library Announcements</h2>
                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-500 pl-4 py-2">
                                <h3 className="font-semibold text-gray-800">New Books Added</h3>
                                <p className="text-sm text-gray-600">Check out our latest collection of programming and computer science books.</p>
                                <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-4 py-2">
                                <h3 className="font-semibold text-gray-800">Extended Hours</h3>
                                <p className="text-sm text-gray-600">Library will be open until 10 PM during exam week.</p>
                                <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                            </div>
                            <div className="border-l-4 border-yellow-500 pl-4 py-2">
                                <h3 className="font-semibold text-gray-800">System Maintenance</h3>
                                <p className="text-sm text-gray-600">Scheduled maintenance on Sunday from 2-4 AM.</p>
                                <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashBoard;