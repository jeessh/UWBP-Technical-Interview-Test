import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Candidate } from './types';
import './index.css';

const App: React.FC = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const URL = 'http://127.0.0.1:5000/';
                console.log("Fetching candidates from backend at ", URL);
                const response = await axios.get<Candidate[]>(URL);
                setCandidates(response.data);
                setError('');
            } catch (err) {
                setError('Failed to fetch candidates. Please try again later.');
                console.error('Error fetching candidates:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCandidates();
    }, []);

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-red-600 p-4">{error}</div>;

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-6">Interview Candidates</h1>
            <div className="flex flex-col space-y-4">
                {candidates.map((candidate, index) => (
                    <div 
                        key={index} 
                        className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-xl font-semibold mb-2">{candidate.name}</h3>
                        <p className="text-gray-600">Major: {candidate.major}</p>
                        <p className="text-gray-600">Location: {candidate.currentLocation}</p>
                        <p className="text-gray-600">
                            Showered: <span>{candidate.hasShowered ? '✅' : '❌'}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
