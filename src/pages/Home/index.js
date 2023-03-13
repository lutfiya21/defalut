import Layout from "../../Layout";

function HomeRoute() {
    return (
        <Layout>
            <div className="bg-cyan-500 grid grid-cols-2 mt-3 space-x-7 text-white">
                <div>
                    <p className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                </div>
                <div>
                    <img src="/5.png" />
                </div>
                <div>
                    <img src="/6.png" />
                </div>
                <div>

                    <p className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

                </div>
            </div>
        </Layout>
    );
}

export default HomeRoute;