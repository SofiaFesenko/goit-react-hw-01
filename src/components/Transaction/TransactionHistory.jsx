import transactioncss from "./TransactionHistory.module.css";

const TransactionHistory = ({items}) => {
    return (

      <div>
          <table className={transactioncss.table}>
            <thead>
              <tr>
                <th className={transactioncss.th}>Type</th>
                <th className={transactioncss.th}>Amount</th>
                <th className={transactioncss.th}>Currency</th>
              </tr>
            </thead>

            <tbody>
              {
                items.map(transactionOne => {
                  return (
                    <tr className={transactioncss.tr} key={transactionOne.id}>
                      <td className={transactioncss.td}>{transactionOne.type}</td>
                      <td className={transactioncss.td}>{transactionOne.amount}</td>
                      <td className={transactioncss.td}>{transactionOne.currency}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

    )
}

export default TransactionHistory