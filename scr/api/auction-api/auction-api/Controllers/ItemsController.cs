using auction_api.DAO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace auction_api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ItemsController : Controller
    {
        private readonly ItemDao itemDao;

        public  ItemsController (ItemDao _itemDao )
        {
            itemDao = _itemDao;
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult GetAllItems ()
        {
            var Items = itemDao.GetAllItems();
            return Items.Any() ? Ok(Items) : (StatusCode(500, "Internal Server Error"));
        }

        [AllowAnonymous]
        [HttpGet("{itemId}")]
        public IActionResult GetItem(int itemId)
        {
            var Item = itemDao.GetItem(itemId);
            return Item.Id != 0 ? Ok(Item) : NotFound();
        }

        [AllowAnonymous]
        [HttpGet("active")]
        public IActionResult GetActiveItems()
        {
            var Items = itemDao.GetActiveItems();
            return Items.Any() ? Ok(Items) : (StatusCode(500, "Internal Server Error"));
        }

    }
}
