import "../css/form.css";
import { useAccount } from 'wagmi';
export default function Form() {
    const { address } = useAccount();
    if (address) {
        return (
            <>
                <div className="connect">
                    <div className="txt" style={{ fontSize: "3em" }}>
                        Sell your Asset
                    </div>
                    <div>
                        Discribe ur Asset
                    </div>
                    <form style={{ marginTop: "3vh" }}>
                        <label htmlFor="assetName">Name of Asset</label>
                        <br />
                        <input type="text" id="assetName" placeholder="Name of Asset" />
                        <br />
                        <label htmlFor="platform">Platform</label>
                        <br />
                        <select id="country" name="country">
                            <option value="Decentraland">Decentraland</option>
                            <option value="Sandbox">Sandbox</option>
                            <option value="Metahero">Metahero</option>
                        </select>
                        <br />
                        <label htmlFor="assetlink">Link of your asset</label>
                        <div style={{ fontSize: "small", color: "red" }}>
                            Link which was given 
                        </div>
                        <input type="url" id="assetlink" placeholder="Link of your asset" />
                        {/* print the token address after mined */}
                        <br />
                        <label htmlFor="Enter_Rate">Enter Rate-(at which you want to sell your ICO)</label>
                        <br />
                        <input type="number" min="0" max="10" inputMode="numeric" id="Enter_Rate" placeholder="Enter Rate" />
                    </form>
                    <br />
                    <button>Submit</button>
                </div>
            </>
        )
    } else {
        return (
            <div className="connect">
                <div className="txt" style={{ fontSize: "3em" }}>
                    Please Connect to a Wallet to Proceed!!
                </div>
            </div>
        )
    }
}