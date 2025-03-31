import './style.css';
import montanha from '../../assets/montanha.png';

function Description() {

    return (
        <section className='section-description'> 
            <div className='container-description'>
                <div>
                    <h2 className='title'>O melhor curso pelo <div>menor preço</div></h2>
                    <p className='description-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <p>
                            Quisquam, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p>
                            Quisquam, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quisquam, voluptatibus!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, soluta laboriosam sequi doloribus magnam perspiciatis ab temporibus obcaecati, officiis explicabo id ex sint maiores. Dolores asperiores non praesentium itaque labore.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati cupiditate quisquam tenetur commodi. Temporibus odio optio et officiis quasi omnis doloremque distinctio alias numquam, commodi ea earum quod delectus!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores atque, velit eos fuga vitae in aut accusantium quis. Possimus voluptate repellendus natus perferendis corporis officiis magnam hic, voluptas exercitationem quis?
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum praesentium odit error optio, perspiciatis, ducimus consequatur debitis eum voluptatum quasi nesciunt qui vitae deserunt aperiam expedita odio? Repellat, inventore in.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ipsam vero dolor illo quasi necessitatibus odio velit? Eaque magnam itaque quia aspernatur voluptatibus, porro error accusantium et asperiores est facilis?
                        </p>
                    </p>
                </div>
                <div>
                    <img src={montanha} alt="" />
                </div>
            </div>
        </section>

    )
}

export default Description;