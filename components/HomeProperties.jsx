import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import connectDB from "@/config/database";
import Property from "@/models/Property";

const HomeProperties = async () => {
  await connectDB();
  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-5">
            Recent Properties
          </h2>
          {recentProperties.length === 0 ? (
            <p>No property found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-lg my-6 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-2 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
