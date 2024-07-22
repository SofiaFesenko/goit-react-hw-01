import transactioncss from "./Transaction.module.css";

const TransactionHistory = ({type, amount, currency}) => {
    return (
      <tr className={transactioncss.tr}>
        <td className={transactioncss.td}>{type}</td>
        <td className={transactioncss.td}>{amount}</td>
        <td className={transactioncss.td}>{currency}</td>
      </tr>
    )
}

export default TransactionHistory