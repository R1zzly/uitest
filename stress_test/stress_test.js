
import http from 'k6/http';
import { check } from 'k6';
export const options = {
    stages: [
        { duration: '10s', target: 100 },
        { duration: '20s', target: 200 },
        { duration: '30s', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(90)<1500'],
    },
};
export default () => {
    const res = http.get('http://localhost:5000/api/books', {
    });
    check(res, {
        'is status 200': (r) => r.status===200,
        'response body contains Book1': (r)=>
            r.body.includes('Book1'),
        'response body contains Book3': (r)=>
            r.body.includes('Book3'),
    });
};
