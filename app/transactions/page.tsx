import AddTransactionButton from "../_components/add-transaction-button";
import { DataTable } from "../_components/data-table";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
    orderBy: {
      date: "desc",
    },
  });

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        {/**Titulo e botão */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </>
  );
};

export default TransactionsPage;

// import { DataTable } from "@/app/_components/data-table";
// import { db } from "../_lib/prisma";
// import AddTransactionButton from "@/app/_components/add-transaction-button";
// import { transactionColumns } from "./_columns";
// import Navbar from "@/app/_components/navbar";

// const TransactionsPage = async () => {
//   const transactions = await db.transaction.findMany({});

//   return (
//     <>
//       <Navbar />
//       <div className="space-y-6 p-6">
//         {/**Titulo e botão */}
//         <div className="flex w-full items-center justify-between">
//           <h1 className="text-2xl font-bold">Transações</h1>
//           <AddTransactionButton />
//         </div>
//         <DataTable columns={transactionColumns} data={transactions} />
//       </div>
//     </>
//   );
// };

// export default TransactionsPage;
