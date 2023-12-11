import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Perfil } from "./pages/Perfil"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import { ReservationProvider } from "./context/reservationsContext";
import { ReservationsPage } from "./pages/ReservationsPage";
import { ReservationFormPage } from "./pages/ReservationFormPage";

import { DocumentProvider } from "./context/documentsContext";
import { DocumentsPage } from "./pages/DocumentsPage";
import { DocumentsAdminPage } from "./pages/DocumentsAdminPage";
import { DocumentViewPage } from "./pages/DocumentViewPage";
import { DocumentFormPage } from "./pages/DocumentFormPage";

import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { EjemplarProvider } from "./context/ejemplaresContext";

function App() {
  return (
    <AuthProvider>
      <EjemplarProvider>
        <ReservationProvider>
          <DocumentProvider>
              <BrowserRouter>
                <main className="content-container mx-auto md:px-0">
                  <Navbar />
                  <Routes>
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/catalogo" element={<DocumentsPage />} />
                    <Route path="/document/:id" element={<DocumentViewPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    <Route element={<ProtectedRoute />}>
                      <Route path="/add-document" element={<DocumentFormPage />} />
                      <Route path="/document/edit/:id" element={<DocumentFormPage />} />
                      <Route path="/documents_admin/" element={<DocumentsAdminPage />} />
                      <Route path="/reservations" element={<ReservationsPage />} />
                      <Route path="/add-reservation" element={<ReservationFormPage />} />
                      <Route path="/reservations/:id" element={<ReservationFormPage />} />
                      <Route path="/user/:id" element={<Perfil />} />
                    </Route>
                  </Routes>
                  <Footer />
                </main>
              </BrowserRouter>
          </DocumentProvider>
        </ReservationProvider>
      </EjemplarProvider>
    </AuthProvider>
  );
}

export default App;
