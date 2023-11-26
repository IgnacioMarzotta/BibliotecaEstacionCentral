import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Perfil, Catalogo, Home } from "./pages";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import { DocumentsPage } from "./pages/DocumentsPage";
import { DocumentViewPage } from "./pages/DocumentViewPage";
import { DocumentProvider } from "./context/documentsContext";
import { DocumentFormPage } from "./pages/DocumentFormPage";

import RegisterPage from "./pages/RegisterPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { LoginPage } from "./pages/LoginPage";
import { TasksPage } from "./pages/TasksPage";
import { TaskProvider } from "./context/tasksContext";

function App() {
  return (
    <AuthProvider>
      <DocumentProvider>
        <TaskProvider>
          <BrowserRouter>
            <main className="content-container mx-auto px-10 md:px-0">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/perfil" element={<Perfil />} />

                <Route path="/documents" element={<DocumentsPage />} />
                <Route path="/add-document" element={<DocumentFormPage />} />
                <Route path="/documents/:id" element={<DocumentFormPage />} />
                <Route path="/document/:id" element={<DocumentViewPage />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/add-task" element={<TaskFormPage />} />
                  <Route path="/tasks/:id" element={<TaskFormPage />} />
                  <Route path="/profile" element={<h1>Profile</h1>} />
                </Route>
              </Routes>
              <Footer />
            </main>
          </BrowserRouter>
        </TaskProvider>
      </DocumentProvider>
    </AuthProvider>
  );
}

export default App;
