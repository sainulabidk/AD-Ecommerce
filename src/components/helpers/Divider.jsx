import React from "react";
import { features } from "../../constants";

const Divider = () => {
  return (
    <div className="bg-zinc-100 py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-darker-blue">
            Website Name
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-darker-gray-medium sm:text-4xl">
            Simplify Your Experience with Easy Access
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the features that make shopping with us a breeze.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-16 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-darker-gray">
                  <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-10 w-10 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h1 className="text-2xl font-bold mx-4">{feature.name}</h1>
                </dt>
                <dd className="mt-2 text-lg leading-7 mx-4 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Divider;
