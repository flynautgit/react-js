import AuthenticatedLayout from "../components/layouts/AuthenticatedLayout";

const Dashboard = ()=>{
    return(
        <AuthenticatedLayout>
            <div>
                Dashboard Page
            </div>
        </AuthenticatedLayout>
    )
}

export default Dashboard;