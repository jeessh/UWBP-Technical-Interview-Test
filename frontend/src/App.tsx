import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Candidate } from './types';

const App: React.FC = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Fetch candidates from the backend
        // If using Node (JavaScript): 'http://localhost:3001/api/candidates'
        // If using Flask (Python): 'http://127.0.0.1:5000/api/candidates'
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>Interview Candidates</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {candidates.map((candidate, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            border: '1px solid #ccc', 
                            padding: '10px', 
                            borderRadius: '4px' 
                        }}
                    >
                        <h3>{candidate.name}</h3>
                        <p>Major: {candidate.major}</p>
                        <p>Location: {candidate.currentLocation}</p>
                        <p>Showered: {candidate.hasShowered ? '✅' : '❌'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
