import React from 'react'
import PropTypes from 'prop-types';

import s from './DialogueItem.module.css';

export const DialogueItem = ({
  avatar = "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
  user = "John Doe",
  message = "Bla-bla-bla-Bla-bla-bla-Bla-bla-Bla-bla-bla-Bla-bla-bla-Bla-bla-",
  date = "June 12, 2022" }) => {
  const getAvatar = avatar => {
    if (avatar) {
      return (
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw0NDQ8NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkvOi4uFx8zODMsNygtLjQBCgoKDg0OFxAQFysZHx0tLS0tKysrNy0tLS0rKystLSsrKystLS03KzcrLSsvLSstKysrLTEtLTcrNSs3KzcrLf/AABEIAPYAzQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADEQAAICAgECBAUCBgMBAAAAAAABAhEDBCEFEhMxQVEGIjJhcRWRFEJScoHBobHR8f/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAlEQACAgICAQMFAQAAAAAAAAAAAQIRAxIhMQQFQVETIjJhgSP/2gAMAwEAAhEDEQA/AO+HHoVHkmw1DUSoVABGhEqFQDIjE6FQARoVEqE+OQENQ9A0t2KdWX4sql5DGSoVEqFQhEaESoVABEQ9CABhDiABhxCABCGEADjDiABUPQ9D0AEaFRKh6ACFCosoVABChUToVABGinaXysJoZxGBxHVMkov1COkdSapSZt9R6VGabSOXza7xyL7NE7O3wzUlaJ0YnQty/lkb1ENENUQoVE6GoQiFConQ1ABGhidDUAEaGJ0NQARGJUKgAYQ9CACdCoccBDUPQ9DpAAyQ9EqEAxqFRXkzJAObfS9Rm2Px5z6RotobvRh5epfcH/VPuOmdkfTZs6KWVHPdfxL6kT/UATa2XNNDSZtD06gDQzdsk17nYa+zcUcfCFOzQx71JIbi2av046VZ0P4yMCHUV7kv1Be5OrMn6abviodZEc+98nj3vuGrE/TeDeFRnYNsOx5UxHHl8ScOidDUTGoDk6IUKidDUAEKFROhqACdDpDpDpAAkh6HoegAi+ADc3Eie/sqKZyXU+pefI0js8bx93bDtvqX3AXsOXkYOTbbfmaWhsLizRI+gxY440FvBJ+5fq9NbfJbi2Y+6L4dRjH1Ra19xyyzqol+PpXuTlowiuWgHZ66orzMPb+IG26Zey9jKGLNPtmpuSinSA2zH/UnJ8l8Nngyk2dqiooMyZaRHWz2zPyZm2WY50JM2ik0bNkoAmpk7g6WFhsc8lq6ZfiyewVi2mgLDiaLpRDhnNOMWza1dqw5cnN6uWmb2pltESjR5PmeMlyi6hqLaGaJPLKqGotcSNAIdIkkPQ6QAMQzz7UXUZPWNjtTGi4LZmD1zfq+Titzct+YZ13dttWc7LJbNUj3cEdYhqyl0NyjO7yuWQujdz4N7Hvv3JT237mHhyl8sxLQoz5C8my36gcsjshLNRHFO2NcHTjyUG4ohsXwAQmEwmSxyyWwiBKnZVFhGN8omzowv3NXp8KNnFyZejzRqYY0ZyOfyHyFRgivLjJ+hDvBM5FYLdM1On5vIys7LtHJyado0yw2gdTjdolRRpytBNGR83mjrNohQ1FlDUBkRQ6GQ6GA8nwzkPiXZpSOszP5WcB8V5PqLguTo8dfccR1DP3SYF3D55fMymUjej19i15CEplTkM2OiNi+OQseQC7xll5Ci4MOTssgDRkWRmSNT5DscqLYZQFZCamS0bxdmzrSsOwVZi6+agzX2jJo2UzqdGSRowmmcvg3C/H1Jp+ZFGjxPJyjqGC5ZUC4964g+XYsDKOFp8k9jKT0s3zIAyZCWnkpouL4OjROLO36fPyNKjF6VO0jdSIZ8v5samQoVE6FQHGDodD0IYFef6WeefFf8x6LlXyv8Hn3xZD6i4dm+B8nnGeXL/JU2Psv5n+QeUzoTPSTLyE2VeIRlMLBjksa5IJk0wspBCkSjMGeQfHIkaQV3FsGDdw8Ju6Vv1454EdMFQbHLQTgzGb3BGCRLNbo2MWUUsvIGs3AyymZtjnRua2zxVhKzGDizhkMxDLlKw2eYs1cnzIyp5Avp8rkh2EZUegdCdpHSpHO9Aj5HSJCPmfOleQjQqJ0NQHEA9w/eDeILxAsrUIcjivivFxL/J1viGB8RYu6LHGXJePhnjnUI1NgcjY69gqTf3MZnQj0YvgVEZDkWMoUZErKkx+8YbFg8ZEcOKc+McJT/ti2X/pOz5+FJfml/sDaCnLlRb/hB5aJx2Jxrsk4W05SXEm/Rfguj0LP2ynJRSjFyau5OldcGpP4am8WPZy5OyOSKcIqKckn6NBaNJYMuRqDjV8/BlrNbb4Vu6SpL8IshlCV0DI/okn/AHRcSE+jbEf5FL+yV/8AZDo3eHKu4saGQsWQE5i6knGS81JNNF0JktCUqDMcgvHMBxyL4zM2i1IIcjR6TzNGP4ht9BhcrJYSnUWei9AXCOh7jB6MqijU8UVnzmd7TYV3C7gXxBeIKzHUy+4buB/EF4hFm+oR3Au/j7oMfvGcw2DU86+I9Hz4OKzQabR651vS7k2ed9a0Gm2kdGOdnRBmFZFkmq8yDZuaWVzkdF0L4ec0suaPyv6YPhP8+/4BPhvQjkySzZVeLBUmv68j+mP+ze/UJym3dJcJLhJewS/R1+Njj+clfwdD03oyfFxxwXpHhI6DR+HMD88ib/c4SW/JKlJ8/cJ1+qzivqf7ijS7VnoZMkpR4nr/AA7HqXSdfGn2zjwjFwxxO1Sf3MXN1OUrTbZZpbPIpP8ARthX2czbZuYdeCfEbQTlwxS+RR/DRVq5k6Og/gMbhF3y0QpGGbNo1Zxm/wBHhspwcfDyJPsf/j/0cPu6uTXySxZVUo/s17o9a3tTt5X0+al7HP8AxZ0xbGv4kec2FOcGvOcV9Uf2/wCi3RGWskdkcLDKXrIZcMxfHKJo41M08Lt0dl8Pa3kct0bWcmmehdF16SOfJKjLNl4o6LVXbFF3eCLKLxjGzzXGwvvF3gfii8YdhqZ3eLxCnuF3EGtF3iD95R3C7hiotyJSVM5jrfTbvg6PuK80FJUxxdDXB5N1Pp7i20jHy8HpXWemXfBw/VdBpujtxzsqwzSn4epiXrmlkyy/ftj/AMIh4leXqUym/D11/Thiv/RRyr3RqjujKkjQjm4+5TLY58zPnn+bzIvKOgU2a2HNyFPa7a9TDwZGgmWW6IaNcWSmdh0rPfLklxfJ1nT+oKcatJpcHmmrs8JGlDecWqfoYNOzqdZFTO6z7aUGptNvyMVZ+3j07uDDnvykvNlv8Tar/I9jpxYoxXfZwfVsSxbOxjj5QzT7f7W7X/DQR0zWcmmWdU1+/czy9HKH79kTpOh9O8uDSc6ieBklU5JfLNXoWhVcHW4aikkBaeFQivcJ7jglK2YN2X+IN4hR3C7iRUX+ILxCjuFYBRRY1kHMi8gxWWWLuKXkIvIOgsv7xnkBpZCmeYrUVhOdqSpnMdY0U74NXJsgexsJqmawi0Q5nG7ke1Jf02v8Gf3cm51vDate/JgNcnUjqxz2ii0aiNjRGa2XRkEYwOy2OQTNIyo1cDqgvvsx8eb7ly2PQzcTohkNHxaCv4hUjHWUtWS2kidTeXkKMW37BOng78kpv+aTZ1vT4qCXuYGlUaNGO0Kas+eeS3ZvLZJLYMOOyWR2TF4x7m0s5JZjHjslkdklwHsayyD95mx2CxZydSrJtkWx2xmOyaZFsi2SZFjsVEJMoyJhDRXIpSE4mfmizO2b5NfPIydua5NYzI+mY23N8p+pi5o8m5sUwLLrpr2foaqaNMVxZl9wlKhZlTafDQPKRqlZ02EKYvFKIS9yfYOhqRasl+Q6z0yeDGkm2VOKbEWpBGPM3+EF62fkEhBVRfjSItHPnm58Lo2tbKHQkZOqzW14XRDkjm0ZbFstUicMBYsBGyDVlakyaky2OAsjgJckPVlcZMtjJko4SxYiHJFKLDWhiVEaMLNhiLJ0RaCxUVyB80i7IBZykwoF2Zv7fsZWxZoZUCZMZakOjLyRYDsSkvJG3LB9iD1E/NGimkJxZx+7LI+WvLydcgSzSX1Rf+Dt8mhF+gPPpMfY6I54pVRk4TXTOR/ifs/2HW4/RN/4Onl0dexH9I+xf14h/oc49rJLhRaQRhUvNm5+k/YlHpjJeaI1GfuzKhZfCzR/TGSj05mbmilFguDI0bOlsPgHx9PDtfUoiU0Uos1tXNf/AMNDG0zP1cJpYsZztoepOMETUEKMCVMmx0JQQ6gJIehWOixwF2fYJaFQWQCuBCUQtopyDsAHMA5jQzAeQdlIAnEr7QuaK6CxlKxicAmMRpILCgV40ReIKcRu0dhQL4Q/hIJUB/DCwoG8JDeEgxYxLGLYpIHjiE8AXHGWeELYdACxFuPGEeGTjALCh8KD8QNjiGYoisGixIftJxiWKJNmZR2j9pd2C7AAtbGI2NYrHQ8gfKy2TBsrCwUQbMwSbL8rB5DsuiuRAmyNDsKJIiyaQziKx0QFRLtGodhqJEkJIkkKx6jUSUR0iaQWNRGjEtSGiidBZepVJDxQ8hJhZOpZAKxMEiwjGxA4hkGWJg8JFiYGTiW2IrsexWTQrGbEIkshNg2ViEMpAmQHkIQxkGJCEMZJDiEIYzGEIYUJEkhhCKRZEmhCEUiaE2IQFFbYkOICSUWXQYhADRfFliYwgMmS7h+4QhEn/9k="
          alt="" />
      )
    }
  }

  return (
    <div className={s.dialogues__item}>
      <div className={s.dialogues__item_avatar}>
        {getAvatar(avatar)}
      </div>

      <div className={s.dialogues__item_info}>
        <div className={s.dialogues__item_info_top}>
          <div>{user}</div>
          <span>{date}</span>
        </div>

        <div className={s.dialogues__item_info_bottom}>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

DialogueItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};