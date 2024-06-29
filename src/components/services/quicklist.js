import '../../css/main.css';
import pricing from '../../images/pricing.svg';
import team from '../../images/globalTeam.svg';

import solutions from '../../images/customizedslutions.svg';
import sector from '../../images/Specificexp.svg';
import global from '../../images/global.svg';

const QuickList = () => {
  const moveToPage = () => {
    // const element=document.getElementById('why-tallen');
    window.location.href = '#why-voyage';
  };

  return (
    <div className="quick-list">

      <div className="quick-child quick-child1" onClick={() => moveToPage ()}>

        <div>
          <img
            className="svg-color-change"
            src={sector}
            alt="Quick list images"
          />

        </div>
        <div className="quick-child-inner ">
          <div className="hover-padding2">Sector</div>
          <div className="hover-padding1">Specific Expertise</div>
          <div className="fas-quick1">

            <i class="fas fa-arrow-circle-right icon-quick" />
          </div>
        </div>

      </div>
      <div className="quick-child quick-child2" onClick={() => moveToPage ()}>

        <div>
          <img
            className="svg-color-change"
            src={team}
            alt="Quick list images"
          />

        </div>
        <div className="quick-child-inner ">
          <div className="hover-padding2">Experienced</div>
          <div className="hover-padding1">Global Team</div>
          <div className="fas-quick2">
            <i class="fas fa-arrow-circle-right icon-quick" />
          </div>
        </div>

      </div>
      <div className="quick-child quick-child3"  onClick={()=>moveToPage()}>

        <div>
          <img
            className="svg-color-change"
            src={solutions}
            alt="Quick list images"
          />

        </div>
        <div className="quick-child-inner ">
          <div className="hover-padding2">Customized</div>
          <div className="hover-padding1">Solutions</div>
          <div className="fas-quick3">
            <i class="fas fa-arrow-circle-right icon-quick" />
          </div>
        </div>
      </div>
      <div />
      <div className="quick-child quick-child4"  onClick={()=>moveToPage()}>

        <div>
          <img
            className="svg-color-change"
            src={global}
            alt="Quick list images"
          />

        </div>
        <div className="quick-child-inner ">
          <div className="hover-padding2">Customer</div>
          <div className="hover-padding1"> Satisfaction</div>
          <div className="fas-quick4">
            <i class="fas fa-arrow-circle-right icon-quick" />
          </div>

        </div>
      </div>
      <div className="quick-child quick-child5" style={{borderRight: 0}}  onClick={()=>moveToPage()}>

        <div>
          <img
            className="svg-color-change"
            src={pricing}
            alt="Quick list images"
          />

        </div>
        <div className="quick-child-inner ">
          <div className="hover-padding2">Affordable</div>
          <div className="hover-padding1"> Pricing</div>

          <div className="fas-quick5">
            <i class="fas fa-arrow-circle-right icon-quick" />
          </div>

        </div>
      </div>

    </div>
  );
};

export default QuickList;
