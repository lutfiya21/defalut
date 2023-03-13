import Layout from "../../Layout";

function AboutRoute() {
    return (
        <Layout>
            <div className="bg-cyan-500 mt-3 text-white">
                <p className="text-2xl w-24 flex justify-center ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="grid grid-cols-4 gap-3 rounded-[15px]">
                    <div>
                        <img src="/1.png" />
                    </div>
                    <div>
                        <img src="/2.png" />
                    </div>
                    <div>
                        <img src="/3.png" />
                    </div>
                    <div>
                        <img src="/4.png" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AboutRoute;