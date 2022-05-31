const CallbackPrint = ({a, b,c, addCallbakc})=>{
    return (
        <div>
            <p>{`${a} ${b} ${c} ${addCallbakc()}`}</p>
        </div>
    );
};

export default CallbackPrint;