const Card = ({ children, headerSlot, className }) => {
  return <div className={className}>
    <>{headerSlot}</>
    <section className="shadow hover:shadow dark:text-gray-300 border dark:border-black rounded-xl px-2 py-4 bg-white dark:bg-sunshine-black-gray lg:duration-100">
        {children}
    </section>
  </div>
}
export default Card
