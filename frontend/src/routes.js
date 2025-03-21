import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Your tabs
const RoomAllocation = React.lazy(() => import('./views/Room-allocation/RoomAllocation'))
const ScheduleViewer = React.lazy(() => import('./views/Schedule-viewer/ScheduleViewer'))
const LecturerRequests = React.lazy(() => import('./views/Lecturer-requests/LecturerRequests'))

const routes = [
  { path: '/room-allocation', name: 'Room Allocation', element: RoomAllocation },
  { path: '/schedule-viewer', name: 'Schedule Viewer', element: ScheduleViewer },
  { path: '/lecturer-requests', name: 'Lecturer Requests', element: LecturerRequests },
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
]

export default routes
