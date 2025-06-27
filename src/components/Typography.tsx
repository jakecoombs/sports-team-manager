export const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    {children}
  </h1>
);

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
    {children}
  </h2>
);

export const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
    {children}
  </h3>
);

export const H4 = ({ children }: { children: React.ReactNode }) => (
  <h4 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
    {children}
  </h4>
);
