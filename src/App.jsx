import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header"; 
import Overview from "./pages/overview/Overview";
import Analytics from "./pages/analytics/Analytics";
import E_Commerce from "./pages/e-commerce/E_Commerce";
import Crypto from "./pages/crypto/Crypto";
import Account from "./pages/account/Account";
import Customers from "./pages/customers/Customers";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import Invoices from "./pages/invoices/Invoices";
import Logistics from "./pages/logistics/Logistics";
import Academy from "./pages/academy/Academy";
import Job from "./pages/job/Job";
import Social_Media from "./pages/social_media/Social_Media";
import Blog from "./pages/blog/Blog";
import File_Manager from "./pages/file_manager/File_Manager";
import Kanban from "./pages/kanban/Kanban";
import Mail from "./pages/mail/Mail";
import Chat from "./pages/chat/Chat";
import Calendar from "./pages/calendar/Calendar";
import Auth from "./pages/auth/Auth";

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";

  return (
    <div className={isAuthPage ? "w-full h-screen" : "flex"}>
      {/* Sidebar faqat /auth bo‘lmaganda ko‘rinadi */}
      {!isAuthPage && <Sidebar />}

      {/* Main Content */}
      <div className={isAuthPage ? "w-full h-screen" : "flex-1 ml-[279px]"}>
        {/* Header faqat /auth bo‘lmaganda ko‘rinadi */}
        {!isAuthPage && <Header />}

        <div className={isAuthPage ? "w-full h-full" : "p-4"}>
          <Routes>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/e-commerce" element={<E_Commerce />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/account" element={<Account />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/job" element={<Job />} />
            <Route path="/social-media" element={<Social_Media />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/file-manager" element={<File_Manager />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;