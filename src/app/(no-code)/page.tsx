
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-y-scroll py-[5%] text-gray-200 px-[4%] scrollbar-hidden">
      <div className="w-full flex flex-col items-center justify-center py-[50%]">
        <h1 className='pt-[12%] pb-[2%] w-full font-bold text-6xl text-center text-orTamise tracking-tighter'>NGUYEN KYLE</h1>
        <h1 className='pt-[8%] pb-[2%] w-full font-bold text-3xl text-center text-mauveNeon tracking-tight'>Étudiant en Informatique, Déterminé & Curieux</h1>
        <p className="text-center text-gray-200 text-pretty w-[40%] leading-4">Passionné par le développement logiciel et les technologies modernes,
        je cherche un <span className="text-mauveNeon font-bold text-xl underline underline-offset-4">stage</span> pour appliquer mes compétences et continuer à apprendre.</p>
      </div>
      <div className="text-center">
        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, accusamus! Id excepturi est ducimus delectus. Eveniet repellendus, optio incidunt rerum ratione inventore quod ullam eligendi sint at quidem praesentium porro!</p> */}
      </div>
    </div>
  );
}
