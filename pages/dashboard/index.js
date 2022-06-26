import ProtectedRoute from '../../components/ProtectedRoute';
import Header from '../../components/Navbar';
import Welcome from '../../components/Welcome';

export default function Dashboard() {


    return (
      <ProtectedRoute>
        {/* Header component */}
        <Header />
        {/* Welcome Container */}
        <Welcome />
      </ProtectedRoute>
    );
  
}
